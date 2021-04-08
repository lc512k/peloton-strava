const combos = require('./combos');
const ScheduleModel = require('../../models/schedule');
const ComboModel = require('../../models/combo');
const mongo = require('../../lib/mongo');
const writeSchedule = async () => {
	await mongo.client();
	let result = await ScheduleModel.updateOne({_id:1}, {
	Monday: [
		'fullBodyWarmUp_10',
		'focusFlowYogaHips_10',
		'restorativeYoga_20',
		'walk_20'
	],
	Tuesday: [
		'fullBodyWarmUp_10',
		'core_10',
		'warmUpRide_10',
		'ride_30',
		'coolDownRide_5',
		'postRideStretch_5'
	],
	Wednesday: [
		'upperBodyWarmUp_5',
		'upperBodyStretch_5',
		'warmUpRide_5',
		'ride_45_arms',
		'coolDownRide_5',
		'postRideStretch_5'
	],
	Thursday: [
		'fullBodyWarmUp_10',
		'core_10',
		'slowFlowYoga_45',
		'walk_20'
	], 
	Friday: [
		'lowerBodyWarmUp_5',
		'lowerBodyStretch_5',
		'warmUpRide_5',
		'ride_45',
		'coolDownRide_5',
		'postRideStretch_5'
	],
	Saturday: [
		'coreWarmUp_5',
		'core_5',
		'lowerBodyStrength_30',
		'lowerBodyStretch_10',
		'recoveryRide_20',
		'postRideStretch_5'
	],
	Sunday: [
		'fullBodyStretch_10',
		'core_10',
		'armsStrength_20',
		'armsStretch_10',
		'chestStrength_20',
		'chestStretch_10'
	]}, {upsert: true, setDefaultsOnInsert: true});
	console.log('schedule A (1)', result);

	result = await ScheduleModel.updateOne({_id:2}, {
	Monday: [
		'fullBodyWarmUp_10',
		'focusFlowYogaHips_10',
		'restorativeYoga_20',
		'walk_20'
	],
	Tuesday: [
		'fullBodyWarmUp_10',
		'core_10',
		'warmUpRide_10',
		'ride_30',
		'coolDownRide_5',
		'postRideStretch_5'
	],
	Wednesday: [
		'fullBodyWarmUp_10',
		'fullBodyStretch_10',
		'warmUpRide_10',
		'ride_30',
		'coolDownRide_5',
		'postRideStretch_5'
	],
	Thursday: [
		'fullBodyWarmUp_10',
		'core_10',
		'slowFlowYoga_45'
	], 
	Friday: [
		'fullBodyWarmUp_10',
		'fullBodyStretch_10',
		'warmUpRide_5',
		'ride_20',
		'ride_15',
		'coolDownRide_5',
		'postRideStretch_5'
	],
	Saturday: [
		'fullBodyWarmUp_10',
		'lowerBodyStrength_30',
		'lowerBodyStretch_10',
		'recoveryRide_20',
		'postRideStretch_5'
	],
	Sunday: [
		'fullBodyStretch_10',
		'core_10',
		'armsStrength_20',
		'armsStretch_10',
		'chestStrength_20',
		'chestStretch_10'
	]}, {upsert: true, setDefaultsOnInsert: true});
	console.log('schedule B (2)', result);
}

( async () => {
	await mongo.client();
	
	await writeSchedule();
	
	let result = await ComboModel.updateOne({_id:'warmUpRide_10'}, combos.warmUpRide_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'warmUpRide_5'}, combos.warmUpRide_5, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'coolDownRide_5'}, combos.coolDownRide_5, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'recoveryRide_20'}, combos.recoveryRide_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'ride_20'}, combos.ride_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'ride_30'}, combos.ride_30, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'ride_45'}, combos.ride_45, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'ride_60'}, combos.ride_60, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'ride_45_arms'}, combos.ride_45_arms, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'ride_60_arms'}, combos.ride_60_arms, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	/////// STRETCHING ///////
	result = await ComboModel.updateOne({_id:'postRideStretch_5'}, combos.postRideStretch_5, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'armsStretch_10'}, combos.armsStretch_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'chestStretch_10'}, combos.chestStretch_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'fullBodyStretch_10'}, combos.fullBodyStretch_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'upperBodyStretch_10'}, combos.upperBodyStretch_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'lowerBodyStretch_10'}, combos.lowerBodyStretch_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'upperBodyStretch_5'}, combos.upperBodyStretch_5, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'lowerBodyStretch_5'}, combos.lowerBodyStretch_5, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	/////// YOGA ///////
	result = await ComboModel.updateOne({_id:'focusFlowYogaHips_10'}, combos.focusFlowYogaHips_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'focusFlowYoga_10'}, combos.focusFlowYoga_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'focusFlowYoga_20'}, combos.focusFlowYoga_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'slowFlowYoga_20'}, combos.slowFlowYoga_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'slowFlowYoga_45'}, combos.slowFlowYoga_45, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'restorativeYoga_20'}, combos.restorativeYoga_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'restorativeYoga_30'}, combos.restorativeYoga_30, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	/////// STRENGTH ////////
	result = await ComboModel.updateOne({_id:'core_10'}, combos.core_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'lowerBodyStrength_30'}, combos.lowerBodyStrength_30, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'upperBodyStrength_30'}, combos.upperBodyStrength_30, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'lowerBodyStrength_20'}, combos.lowerBodyStrength_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'upperBodyStrength_20'}, combos.upperBodyStrength_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'armsStrength_30'}, combos.armsStrength_30, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'armsStrength_20'}, combos.armsStrength_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'chestStrength_20'}, combos.chestStrength_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'core_5'}, combos.core_5, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'lowerBodyWarmUp_5'}, combos.lowerBodyWarmUp_5, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'upperBodyWarmUp_5'}, combos.upperBodyWarmUp_5, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'fullBodyWarmUp_10'}, combos.fullBodyWarmUp_10, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'coreWarmUp_5'}, combos.coreWarmUp_5, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'chestStrength_20'}, combos.chestStrength_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	/////// BOOTCAMP //////// 
	result = await ComboModel.updateOne({_id:'bootcamp_45'}, combos.bootcamp_45, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	result = await ComboModel.updateOne({_id:'bootcamp_30'}, combos.bootcamp_30, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
	/////// WALKING //////// 
	result = await ComboModel.updateOne({_id:'walk_20'}, combos.walk_20, {upsert: true, setDefaultsOnInsert: true});
	console.log(result);
})();
