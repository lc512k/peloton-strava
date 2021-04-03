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
	NOT_MY_STYLE: process.env.NOT_MY_STYLE || -5,
	MY_STYLE: process.env.MY_STYLE || 1,
	INSTRUCTOR_MAX: process.env.INSTRUCTOR_MAX ||  5,
	EASE_MULTIPLIER: process.env.EASE_MULTIPLIER || 0,
	DONE_IT: process.env.DONE_IT || -5,
	FAV: process.env.FAV || 2
}

const getRides = async (classTemplate) => {
	const include = classTemplate.titleIncludeStrings ? classTemplate.titleIncludeStrings.join('|') : '';
	const exclude = classTemplate.titleExcludeStrings || [];
	console.log({exclude})
	console.log({include})
	const nin = exclude.map(item => new RegExp(item));
	console.log({nin})
	let rides = await RideModel.find({
		ride_type_id: {$in: getIds(classTemplate)},
		duration: classTemplate.duration * 60,
		language: 'english',
		title: {$regex: include, $nin: nin},
		original_air_time: {$gt: FROM_DATE}
	})
	.sort({original_air_time: NOW_TO_PAST})
	.limit(10000)
	.lean()
	.exec();

	console.log({classType: classTemplate.classType, hits: rides.length});
	return rides;
}

const getTitleWeight = (rawRide, classTemplate) => {
	let result = 0;
	const title = rawRide.title.toLowerCase();
	if (title.includes('rock') || title.includes('country')|| title.includes('hiit')){
		result += WEIGHT.NOT_MY_STYLE;
	}
	if (title.includes('pop') || title.includes('xoxo')){
		result += WEIGHT.MY_STYLE;
	}
	return result;
}

const getInstructorWeight = (rawRide, classTemplate) => {
	let result = 0;
	const name = instructorsHash[rawRide.instructor_id] ? instructorsHash[rawRide.instructor_id].name : 'NOT FOUND';

	if (Object.keys(classTemplate.preferredInstructors).includes(name)){
		result += classTemplate.preferredInstructors[name];
	}
	else {
		result += -WEIGHT.INSTRUCTOR_MAX
	}
	return result;
}

const getDoneItWeight = async (rawRide, classTemplate) => {
	let result = 0;
	const workout = await WorkoutModel.find({ride_id:rawRide._id});
	const doneIt = workout.length > 0;

	if (doneIt) {
		result = WEIGHT.DONE_IT;
		if (classTemplate.repeatsOK) {
			result *= -1;
		}	
		return result;
	}
	return 0;
}

const getEaseWeight = (rawRide, classTemplate) => {
	let result = 0;
	result = WEIGHT.EASE_MULTIPLIER*(10 - (rawRide.difficulty_rating_avg || 10));
	return result;
	return 0;
}

const getRandomNoise = (rawRide, classTemplate) => {
	if (classTemplate.random) {
		return Math.random()*5;
	}
	return 0;
}

const getRecencyWeight = (rawRide, classTemplate) => {
	let result = 0;
	result = rawRide.original_air_time / 1000000000;
	return Math.pow(result, 5);
}
const getFavWeight = (rawRide, classTemplate) => {
	let result = 0;
	result = rawRide.is_favorite ? WEIGHT.FAV : 0;
	return result;
}

const buildStack = async (queryDay, sendToBike) => {
	console.log(`queryDay: ${queryDay}\n`)
	await mongo.client();

	let tomorrowRaw = moment().add(1,'days')
	tomorrow = queryDay || process.env.TESTDAY || tomorrowRaw.format('dddd');

	const weekOfYear = tomorrowRaw.week();
	console.log()
	const weekId = weekOfYear % 2 === 0 ? 1 : 2;
	console.log(`week ${weekOfYear}, weekId ${weekId}`)
	const week = await ScheduleModel.find({_id: weekId}).lean().exec();
	const schedule = week[0][tomorrow];
	console.log(`${tomorrow} schedule:`, schedule)

	const response = [];

	for (let classTemplateId of schedule) {
		const classTemplate = await ComboModel.findOne({_id: classTemplateId}).lean().exec();
		console.log("**************\nclassTemplate\n**************", classTemplate)
		let rides = await getRides(classTemplate);

		for (rawRide of rides) {
			let totalWeight = 0;
			rawRide.weights = {}
			rawRide.weights.instructor = getInstructorWeight(rawRide, classTemplate);
			rawRide.weights.doneIt = await getDoneItWeight(rawRide, classTemplate);
			rawRide.weights.randomNoise = getRandomNoise(rawRide, classTemplate);
			rawRide.weights.recency = getRecencyWeight(rawRide, classTemplate);
			rawRide.weights.title = getTitleWeight(rawRide, classTemplate);
			rawRide.weights.ease = getEaseWeight(rawRide, classTemplate);
			rawRide.weights.fav = getFavWeight(rawRide, classTemplate);

			for (const label in rawRide.weights) {
				totalWeight += rawRide.weights[label];
			}
			rawRide.weight = totalWeight;
		}

		rides = rides.sort(compare);

		rides = rides.map(({weights, weight, title, instructor_id, _id, original_air_time, join_tokens, image_url}) => ({
				_id,
				date: moment.unix(original_air_time).format('DD/MM/YYYY'), 
				weights, 
				weight, 
				image_url,
				join_tokens,
				title, 
				instructor: instructorsHash[instructor_id] ? instructorsHash[instructor_id].name:'NONAME'
		}));
		console.log('-------\nTOP 5 CANDIDATES\n-------')
		console.log(rides.slice(0,5))
		const selected = rides[0];

		response.push(selected);
		console.log('\n\n\n')
	
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
