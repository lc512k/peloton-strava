const combos = require('./combos');
const ScheduleModel = require('../../models/schedule');
const ComboModel = require('../../models/combo');
const mongo = require('../../lib/mongo');

const weekA = {
	Monday: [
		'warmUpRide_5',
		'ride_30',
		'coolDownRide_5',
		'postRideStretch_5',
		'core_10',
		'chestStrength_20',
		'upperBodyStretch_5'
	],
	Tuesday: [
		'warmUpRide_5',
		'ride_30',
		'coolDownRide_5',
		'postRideStretch_5',
		'core_5',
		'fullBodyStretch_10'
	],
	Wednesday: [
		'warmUpRide_5',
		'ride_30',
		'coolDownRide_5',
		'postRideStretch_5',
		'core_10',
		'armsStrength_20',
		'upperBodyStretch_5'
	],
	Thursday: [
		'slowFlowYoga_20',
		'standingYoga_10'
	], 
	Friday: [
		'core_10',
		'lowerBodyWarmUp_5',
		'lowerBodyStrength_20',
		'lowerBodyStretch_10',
		'warmUpRide_5',
		'coolDownRide_5',
		'postRideStretch_5'
	],
	Saturday: [
		'recoveryRide_10',
		'postRideStretch_5',
		'upperBodyWarmUp_5',
		'upperBodyStrength_30',
		'upperBodyStretch_10'
	],
	Sunday: [
		'standingYoga_10',
		'fullBodyStretch_10'
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
