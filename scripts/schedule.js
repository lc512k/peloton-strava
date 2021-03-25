const writeSchedule = async () => {
	await mongo.client();
	const result = await ScheduleModel.updateOne({_id:1}, {
	Monday: [
		'fullBodyStretch_10',
		'focusFlowYoga_10',
		'restorativeYoga_20',
		'walk_20'
	],
	Tuesday: [
		'fullBodyStretch_10',
		'core_10',
		'warmUpRide_5',
		'ride_30',
		'coolDownRide_5',
		'postRideStretch_5',
		'focusFlowYoga_10'
	],
	Wednesday: [
		'fullBodyStretch_10',
		'ride_45_arms',
		'coolDownRide_5',
		'postRideStretch_5',
		'walk_20'
	],
	Thursday: [
		'slowFlowYoga_45',
		'focusFlowYoga_10'
	], 
	Friday: [
		'fullBodyStretch_10',
		'ride_45',
		'coolDownRide_5',
		'postRideStretch_5',
		'walk_20'
	],
	Saturday: [
		'fullBodyStretch_10',
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
	console.log(result);
}

const writeCombos = async () => {
	await mongo.client();
	const result = await ScheduleModel.updateOne({_id:1}, {
	Monday: [
		'fullBodyStretch_10',
		'focusFlowYoga_10',
		'restorativeYoga_20',
		'walk_20'
	],
	Tuesday: [
		'fullBodyStretch_10',
		'core_10',
		'warmUpRide_5',
		'ride_30',
		'coolDownRide_5',
		'postRideStretch_5',
		'focusFlowYoga_10'
	],
	Wednesday: [
		'fullBodyStretch_10',
		'ride_45_arms',
		'coolDownRide_5',
		'postRideStretch_5',
		'walk_20'
	],
	Thursday: [
		'slowFlowYoga_45',
		'focusFlowYoga_10'
	], 
	Friday: [
		'fullBodyStretch_10',
		'ride_45',
		'coolDownRide_5',
		'postRideStretch_5',
		'walk_20'
	],
	Saturday: [
		'fullBodyStretch_10',
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
	console.log(result);
}