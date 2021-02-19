const combos = require('./combos');
const moment = require('moment');
const mongo = require('./lib/mongo');
const RideModel = require('./models/ride');
const classTypes = require('./meta/class-types.js');

const getId = (clase) => {
	console.log(clase)
	for (classType of classTypes) {
		if (classType.display_name === clase.classType[0] && classType.fitness_discipline === clase.discipline){
			console.log('returning', classType.id)
			return classType.id;
		}
	}
	console.log('!!!!!!! found nothing')
}

const buildStack = async () => {

	await mongo.client();

	const week = {
		Monday: [],
		Tuesday: [
			combos.fullBodyStretch_10,
			combos.core_10,
			combos.warmUpRide_5,
			combos.ride_30,
			combos.coolDownRide_5,
			combos.postRideStretch_5,
			combos.focusFlowYoga_10
		],
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

	let today = moment();
	let tomorrow = moment().add(1,'days').format('dddd');

	const schedule = week[tomorrow];
	console.log({tomorrow, schedule})

	for (let clase of schedule) {
		const result = await RideModel.find({
			ride_type_id: getId(clase),
			duration: clase.duration,
			title: { $regex: clase.titleSearchString || '', $options: "i" }
		}).exec();
		console.log({hits: result.length});
		console.log({example: result[0]})
		console.log('\n\n\n\n\n\n')
	
	}

	mongo.mongoose.connection.close();

	return {tomorrow}
}

module.exports = {buildStack};