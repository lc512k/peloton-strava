const combos = require('./combos');
const ScheduleModel = require('../../models/schedule');
const ComboModel = require('../../models/combo');
const mongo = require('../../lib/mongo');

const weekA = {
	  "Friday": [
	    "fullBodyStrength_30",
	    "fullBodyStretch_10"
	  ],
	  "Monday": [
	    "warmUpRide_5",
	    "ride_30",
	    "coolDownRide_5",
	    "postRideStretch_5",
	    "chestStrength_20",
	    "upperBodyStretch_5"
	  ],
	  "Saturday": [
	    "standingYoga_10",
	    "recoveryRide_10",
	    "postRideStretch_5"
	  ],
	  "Sunday": [
	    "standingYoga_10",
	    "fullBodyStretch_10"
	  ],
	  "Thursday": [
	    "warmUpRide_5",
	    "ride_30",
	    "coolDownRide_5",
	    "postRideStretch_5"
	  ],
	  "Tuesday": [
	    "warmUpRide_5",
	    "ride_45",
	    "coolDownRide_5",
	    "postRideStretch_5"
	  ],
	  "Wednesday": [
	    "warmUpRide_5",
	    "ride_20",
	    "coolDownRide_5",
	    "postRideStretch_5",
	    "upperBodyStrength_30",
	    "upperBodyStretch_5"
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
