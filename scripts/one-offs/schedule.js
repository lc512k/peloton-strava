const combos = require('./combos');
const ScheduleModel = require('../../models/schedule');
const ComboModel = require('../../models/combo');
const mongo = require('../../lib/mongo');

const weekA = {
	  "Monday": [
	    "standingYoga_5",
	    "core_5",
	    "upperBodyStretch_5",
	    "warmUpRide_5",
	    "ride_15",
	    "postRideStretch_5",
	    "chestStrength_20",
	    "upperBodyStretch_5"
	  ],
	  "Tuesday": [
	    "standingYoga_5",
	    "core_5",
	    "upperBodyStretch_5",
	    "warmUpRide_5",
	    "ride_30",
	    "coolDownRide_5",
	    "postRideStretch_5"
	  ],
	  "Wednesday": [
	    "standingYoga_5",
	    "core_5",
	    "upperBodyStretch_5",
	    "warmUpRide_5",
	    "ride_20",
	    "coolDownRide_5",
	    "postRideStretch_5",
	    "armsStrength_20",
	    "upperBodyStretch_5"
	  ],
	  "Thursday": [
	    "slowFlowYoga_20"
	  ],
	  "Friday": [
	    "fullBodyStrength_30",
	    "fullBodyStretch_10"
	  ],
	  "Saturday": [
	    "standingYoga_10",
	    "recoveryRide_20",
	    "postRideStretch_5",
	    "fullBodyStretch_10"
	  ],
	  "Sunday": [
	    "standingYoga_10",
	    "recoveryRide_20",
	    "postRideStretch_5",
	    "fullBodyStretch_10"
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
