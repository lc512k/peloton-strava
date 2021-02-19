const combos = require('./combos');
const moment = require('moment');
const mongo = require('./lib/mongo');
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
			let weight = 0;
			let weights = {}

			if (unweightedRide.title.toLowerCase().includes('rock')){
				weight += -5;
				weights.rock = -5;
			}
			if (unweightedRide.title.toLowerCase().includes('pop')){
				weight += +1;
				weights.pop = +1;
			}
			if (unweightedRide.title.toLowerCase().includes('HIIT')){
				weight += -5;
				weights.hiit = -5;
			}
			const name = instructorsHash[unweightedRide.instructor_id] ? instructorsHash[unweightedRide.instructor_id].name : 'NOT FOUND';
			if (classTemplate.preferredInstructors.includes(name)){
				const totalInstructors = classTemplate.preferredInstructors.length + 1;
				const instructorPosition = classTemplate.preferredInstructors.indexOf(name) + 1;
				const instructorWeight = totalInstructors - instructorPosition;
				const instructorWeightNormalized = instructorWeight*10/totalInstructors;

				console.log(instructorWeightNormalized, name)
				weight += instructorWeightNormalized;

				weights.instructor = instructorWeightNormalized;
			}

			weight += counter
			weights.recency = counter;

			weights.ease = 10 - (unweightedRide.difficulty_rating_avg || 10);
			weight += 10; 


			unweightedRide.weight = weight;
			unweightedRide.weights = weights;
			counter = counter/1.1;
		}

		// if I've bookmarked it and not done it
		// bookmarked and done
		// done

		result.sort(compare);
		console.log(result.slice(0,3))
		console.log('\n\n\n\n\n\n')
	
	}

	mongo.mongoose.connection.close();

	return {tomorrow}
}

module.exports = {buildStack};