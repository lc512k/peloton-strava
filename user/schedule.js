const combos = require('./combos');
module.exports = {
	Monday: [
		combos.upperBodyStretch_10,
		combos.lowerBodyStretch_10,
		combos.restorativeYoga_30
	],
	Tuesday: [
		combos.core_10,
		combos.fullBodyStretch_10,
		combos.warmUpRide_5,
		combos.ride_30,
		combos.coolDownRide_5,
		combos.postRideStretch_5,
		combos.focusFlowYoga_10
	],
	Wednesday: [
		combos.core_10,
		combos.fullBodyStretch_10,
		combos.warmUpRide_5,
		combos.ride_45,
		combos.coolDownRide_5,
		combos.postRideStretch_5
	],
	Thursday: [
		combos.core_10,
		combos.fullBodyStretch_10,
		combos.recoveryRide_20,
		combos.postRideStretch_5,
		combos.focusFlowYoga_20,
		combos.lowerBodyStretch_10
	], 
	Friday: [
		combos.core_10,
		combos.fullBodyStretch_10,
		combos.warmUpRide_5,
		combos.bootcamp_45,
		combos.coolDownRide_5,
		combos.postRideStretch_5
	],
	Saturday: [
		combos.core_10,
		combos.fullBodyStretch_10,
		combos.warmUpRide_5,
		combos.ride_20,
		combos.coolDownRide_5,
		combos.postRideStretch_5,
		combos.focusFlowYoga_10,
		combos.lowerBodyStrength_30, 
                combos.lowerBodyStretch_10
	],
	Sunday: [
		combos.core_10,
		combos.fullBodyStretch_10,
		combos.recoveryRide_20,
		combos.postRideStretch_5,
		combos.armsStrength_30,
		combos.armsStretch_10,
		combos.chestStrength_20,
		combos.chestStretch_10
	]
}
