const combos = require('./combos');
const ScheduleModel = require('../../models/schedule');
const ComboModel = require('../../models/combo');
const mongo = require('../../lib/mongo');

const weekA = {
	Monday: [
		'coreWarmUp_5',
		// 'core_10',
		'warmUpRide_5',
		'ride_20',
		'coolDownRide_5',
		'postRideStretch_5',
		'warmUpRide_5',
		'ride_30',
		'coolDownRide_5',
		'postRideStretch_5',
		'upperBodyStretch_10'
	],
	Tuesday: [
		'coreWarmUp_5',
		// 'core_10',
		'warmUpRide_5',
		'ride_20',
		'coolDownRide_5',
		'postRideStretch_5',
		'upperBodyWarmUp_5',
		'upperBodyStrength_30',
		'upperBodyStretch_10'
	],
	Wednesday: [
		'slowFlowYoga_30',
		'walk_20',
		'postRunStretch_5',
		'upperBodyStretch_10'
	],
	Thursday: [
		'coreWarmUp_5',
		// 'core_10',
		'warmUpRide_5',
		'ride_20',
		'coolDownRide_5',
		'postRideStretch_5',
		'warmUpRide_10',
		'ride_10',
		'coolDownRide_5',
		'postRideStretch_5',
		'upperBodyStretch_10'
	], 
	Friday: [
		'coreWarmUp_5',
		// 'core_10',
		'warmUpRide_10',
		'ride_20',
		'coolDownRide_5',
		'postRideStretch_5',
		'warmUpRide_5',
		'coolDownRide_5',
		'postRideStretch_5',
		'upperBodyStretch_10'
	],
	Saturday: [
		'upperBodyStretch_10'
	],
	Sunday: [
		'upperBodyStretch_10'
	]
}

const weekB = weekA;

const writeSchedule = async () => {
	await mongo.client();
	let result = await ScheduleModel.updateOne({_id:1}, weekA, {upsert: true, setDefaultsOnInsert: true});
	console.log('schedule A (1)', result);

	result = await ScheduleModel.updateOne({_id:2}, weekB, {upsert: true, setDefaultsOnInsert: true});
	console.log('schedule B (2)', result);
}

( async () => {
	await mongo.client();
	await writeSchedule();
	const comboNames = Object.keys(combos);

	for (let name of comboNames) {
		let result = await ComboModel.updateOne({_id:name}, combos[name], {upsert: true, setDefaultsOnInsert: true});
		console.log(result, 'UPDATED', name )
	}
})();
