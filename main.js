const combos = require('./combos');
const moment = require('moment');
const mongo = require('./lib/mongo');
const WorkoutModel = require('./models/workout');
const RideModel = require('./models/ride');
const classTypes = require('./meta/class-types.js');
const instructorsHash = require('./meta/instructors-hash.js');

const NOW_TO_PAST = -1;
const PAST_TO_NOW = 1;
const FROM_DATE = 1514768461;

const week = {
	Monday: [],
	Tuesday: [],
	Wednesday: [],
	Thursday: [], 
	Friday: [],
	Saturday: [
		combos.fullBodyStretch_10,
		combos.core_10,
		combos.warmUpRide_5,
		combos.ride_30,
		combos.coolDownRide_5,
		combos.postRideStretch_5,
		combos.focusFlowYoga_10
	],
	Sunday: []
}

function compare( a, b ) {
  if ( a.weight < b.weight ){
    return 1;
  }
  if ( a.weight > b.weight ){
    return -1;
  }
  return 0;
}

const getIds = (classTemplate) => {
	
	const ids = [];

	for (typeILike of classTemplate.classType) {

		for (classType of classTypes) {
			if (classType.display_name === typeILike && classType.fitness_discipline === classTemplate.discipline){
				ids.push(classType.id);
			}
		}
	}

	if (ids.length === 0) {
		console.error('ERROR found nothing for', classTemplate)
	}
	return ids;
}

const buildStack = async () => {

	await mongo.client();

	let today = moment();
	let tomorrow = moment().add(1,'days').format('dddd');

	const schedule = week[tomorrow];
	console.log({tomorrow, schedule})

	const response = [];

	for (let classTemplate of schedule) {
		const result = await RideModel.find({
			ride_type_id: {$in: getIds(classTemplate)},
			duration: classTemplate.duration,
			title: { $regex: classTemplate.titleSearchString || '', $options: "i" },
			original_air_time: {$gt: FROM_DATE}
		})
		.sort({original_air_time: NOW_TO_PAST})
		.limit(10000)
		.lean()
		.exec();

		console.log({hits: result.length});

		let counter = 5;
		for (unweightedRide of result) {
			// console.log('********** RIDE', unweightedRide.title)
			let weight = 0;
			let weights = {}

			if (unweightedRide.title.toLowerCase().includes('rock')){
				weights.rock = -5;
			}
			if (unweightedRide.title.toLowerCase().includes('pop')){
				weights.pop = +1;
			}
			if (unweightedRide.title.toLowerCase().includes('HIIT')){
				weights.hiit = -5;
			}
			const name = instructorsHash[unweightedRide.instructor_id] ? instructorsHash[unweightedRide.instructor_id].name : 'NOT FOUND';
			if (classTemplate.preferredInstructors.includes(name)){
				const totalInstructors = classTemplate.preferredInstructors.length + 1;
				const instructorPosition = classTemplate.preferredInstructors.indexOf(name) + 1;
				const instructorWeight = totalInstructors - instructorPosition;
				const instructorWeightNormalized = instructorWeight*10/totalInstructors;

				// console.log(instructorWeightNormalized, name)

				weights.instructor = instructorWeightNormalized;
			}

			weights.recency = counter;

			weights.ease = 10 - (unweightedRide.difficulty_rating_avg || 10);

			unweightedRide.weights = weights;

			const workout = await WorkoutModel.find({ride_id:unweightedRide._id});
			const doneIt = workout.length > 0;
			
			if (doneIt) {
				weights.doneIt = -5;
			}

			if (unweightedRide.title.includes(classTemplate.titleExcludeString)) {
				weights.exludedString = -5;
			}

			// console.log({weights})
			for (const label in weights) {
				// console.log({label})
				weight += weights[label];
			}
			unweightedRide.weight = weight;
			counter = counter/1.1;
		}

		// if I've bookmarked it and not done it
		// bookmarked and done
		// done

		result.sort(compare);
		console.log(result[0])
		response.push(result[0]);
		console.log('\n\n\n\n\n\n')
	
	}

	mongo.mongoose.connection.close();

	return {response}
}

module.exports = {buildStack};