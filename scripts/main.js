const login = require('./login');
const moment = require('moment');
const mongo = require('../lib/mongo');
const WorkoutModel = require('../models/workout');
const RideModel = require('../models/ride');
const ScheduleModel = require('../models/schedule');
const ComboModel = require('../models/combo');
const instructorsHash = require('../meta/instructors-hash.js');
const FormData = require('form-data');
const saveStack = require('../lib/graphql')
const getIds = require('../lib/meta')
const compare = require('../lib/tools')

const NOW_TO_PAST = -1;
const PAST_TO_NOW = 1;
const FROM_DATE = 1546300800; //2019-01-01
let tomorrow;
let cookie;

const WEIGHT = {
	ROCK: process.env.ROCK || -5,
	HIIT: process.env.HIIT || -5,
	POP: process.env.POP || 1,
	INSTRUCTOR_MAX: process.env.INSTRUCTOR_MAX ||  2,
	EASE_MULTIPLIER: process.env.EASE_MULTIPLIER || 0.5,
	DONE_IT: process.env.DONE_IT || -2
}

const getRides = async (classTemplate) => {


	const include = classTemplate.includeStrings ? classTemplate.includeStrings.join('|') : '';
	const exclude = classTemplate.excludeStrings || [];
	console.log({exclude})
	console.log({include})
	let rides = await RideModel.find({
		ride_type_id: {$in: getIds(classTemplate)},
		duration: classTemplate.duration * 60,
		language: 'english',
		title: {$regex: include, $nin: exclude.map(item => new RegExp(item))},
		original_air_time: {$gt: FROM_DATE}
	})
	.sort({original_air_time: NOW_TO_PAST})
	.limit(10000)
	.lean()
	.exec();

	console.log({classType: classTemplate.classType, hits: rides.length});

	return rides;
}

const buildStack = async (queryDay, sendToBike) => {
	console.log(`queryDay: ${queryDay}\n`)
	await mongo.client();

	let today = moment();
	tomorrow = queryDay || process.env.TESTDAY || moment().add(1,'days').format('dddd');

	const week = await ScheduleModel.find().lean().exec();
	const schedule = week[0][tomorrow];
	console.log(`${tomorrow} schedule:`, schedule)

	const response = [];

	for (let classTemplateId of schedule) {
		const classTemplate = await ComboModel.findOne({_id: classTemplateId}).lean().exec();
		console.log("**** classTemplate", classTemplate)
		let rides = await getRides(classTemplate);

		console.log({rides})

		let counter = 5;

		for (unweightedRide of rides) {
			let weight = 0;
			let weights = {}

			if (unweightedRide.title.toLowerCase().includes('rock')){
				weights.rock = WEIGHT.ROCK;
			}
			if (unweightedRide.title.toLowerCase().includes('pop')){
				weights.pop = WEIGHT.POP;
			}
			if (unweightedRide.title.toLowerCase().includes('HIIT')){
				weights.hiit = WEIGHT.HIIT;
			}
			const name = instructorsHash[unweightedRide.instructor_id] ? instructorsHash[unweightedRide.instructor_id].name : 'NOT FOUND';
			if (Object.keys(classTemplate.preferredInstructors).includes(name)){
				weights.instructor = classTemplate.preferredInstructors[name]/WEIGHT.INSTRUCTOR_MAX;
			}
			else {
				weights.instructor = -WEIGHT.INSTRUCTOR_MAX
			}
			weights.recency = counter;
			weights.ease = WEIGHT.EASE_MULTIPLIER*(10 - (unweightedRide.difficulty_rating_avg || 10));
			unweightedRide.weights = weights;

			const workout = await WorkoutModel.find({ride_id:unweightedRide._id});
			const doneIt = workout.length > 0;

			if (doneIt) {
				weights.doneIt = WEIGHT.DONE_IT;
				if (classTemplate.repeatsOK) {
					weights.doneIt *= -1;
				}
				console.log(classTemplate)
				console.log('DONE IT weight', weights.doneIt, 'favourite?', unweightedRide.is_favorite, unweightedRide.description)
				console.log({weights})
			}
			for (const label in weights) {
				weight += weights[label];
			}
			unweightedRide.weight = weight;
			counter = counter/1.1;
		}

		rides.sort(compare);
		console.log(rides.map(({weights, weight, title, instructor_id}) => ({weights, weight, title, instructor: instructorsHash[instructor_id]?instructorsHash[instructor_id].name:'NONAME'})).slice(0,5))
		let selected = rides[0];

		if (classTemplate.random) {
			console.log('RANDOM OK for ', classTemplate.classType)
			const randomPos = Math.floor(Math.random() * 5) + 1 ;
			console.log({randomPos})
			selected = rides[randomPos]
		}

		response.push(selected);
		console.log('\n')
	
	}
	return response;
}

const stackClasses = async (query) => {
	await mongo.client();
	cookie = await login();
	const day = query ? query.day : undefined;

	const stack = await buildStack(day);

	let graphqlresult;

	if ((process.env.SEND_TO_BIKE && !query) || (query && query.sendToBike)) {
		console.log('SEND_TO_BIKE', process.env.SEND_TO_BIKE, 'query', query)
		graphqlresult = await saveStack(stack);
	}
	result = {stack, graphqlresult}

	console.log(tomorrow)
	console.log({result})

	mongo.mongoose.connection.close();
	return result;
}

module.exports = {stackClasses};
