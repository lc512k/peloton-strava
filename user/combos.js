/////// CYCLING ///////
exports.warmUpRide_5 = {
	classType: ['Low Impact'],
	titleSearchString: 'Warm Up',
	discipline: 'cycling',
	duration: 300,
	preferredInstructors: [
		'Cody Rigsby',
		'Tunde Oyeneyin',
		'Robin Arzon',
		'Sam Yo',
		'Ben Aldis',
		'Leanne Hainsby',
		'Hannah Frankson',
		'Christine D\'Erecole',
		'Alex Toussaint',
		'Ally Love',
		'Matt Wilpers'
	]
}
exports.coolDownRide_5 = {
	classType: ['Low Impact'],
	titleSearchString: 'Cool Down',
	discipline: 'cycling',
	duration: 300,
	preferredInstructors: [
		'Cody Rigsby',
		'Christine D\'Erecole',
		'Sam Yo',
		'Matt Wilpers',
		'Cody Rigsby',
		'Tunde Oyeneyin',
		'Robin Arzon',
		'Ben Aldis',
		'Leanne Hainsby',
		'Hannah Frankson',
		'Alex Toussaint',
		'Ally Love'
	]
}
exports.recoveryRide_20 = {
	classType: ['Low Impact', 'Beginner'],
	discipline: 'cycling',
	duration: 1200,
	preferredInstructors: [
		'Cody Rigsby',
		'Tunde Oyeneyin',
		'Robin Arzon',
		'Matt Wilpers',
		'Christine D\'Erecole',
		'Sam Yo',
		'Ally Love',
		'Hannah Frankson'
	]
}

const buildRide = (duration, classType, titleSearchString, titleExcludeString, titlePreferredString) => {
	const ride = {
		classType,
		titleSearchString,
		discipline: 'cycling',
		titlePreferredString,
		titleExcludeString,
		preferredInstructors: [
			'Cody Rigsby',
			'Robin Arzon'
		]
	};
	// TODO no need, add to object
	ride.duration = duration*60;
	return ride;
}

exports.ride_20 = buildRide(20, ['Music', 'Theme', 'Groove'], null, 'Arms');
exports.ride_30 = buildRide(30, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ', 'Climb', 'Power Zone'], null, 'Endurance');
exports.ride_45 = buildRide(45, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ'], null, 'Endurance', 'Arms');

/////// STRETCH ///////
exports.postRideStretch_5 = {
	classType: ['Pre & Post-Ride Stretch'],
	titleSearchString: 'Post',
	discipline: 'stretching',
	duration: 300,
	preferredInstructors: [
		'Cody Rigsby',
		'Tunde Oyeneyin',
		'Robin Arzon'
	]
}

const buildStretch = (duration, classType, titleSearchString) => {
	const stretch = {
		classType,
		titleSearchString,
		discipline: 'stretching',
		titleExcludeString: 'Foam',
		preferredInstructors: [
			'Andy Speer',
			'Hannah Corbin',
			'Denis Morton',
			'Ben Aldis',
			'Robin Arzon'
		]
	};
	stretch.duration = duration*60;
	return stretch;
}

exports.armsStretch_10 = buildStretch(10, ['Upper Body Stretch'], 'Arms')
exports.chestStretch_10 = buildStretch(10, ['Upper Body Stretch'], 'Chest')
exports.fullBodyStretch_10 = buildStretch(10, ['Full Body Stretch'])
exports.upperBodyStretch_10 = buildStretch(10, ['Upper Body Stretch'])
exports.lowerBodyStretch_10 = buildStretch(10, ['Lower Body Stretch'])

/////// YOGA ///////
const buildYoga = (duration, classType, titleSearchString) => {
	const yoga = {
		classType,
		titleSearchString,
		discipline: 'yoga',
		preferredInstructors: [
			'Aditi Shah',
			'Anna Greenberg',
			'Denis Morton'
		]
	};
	yoga.duration = duration*60;
	return yoga;
}
exports.focusFlowYoga_10 = buildYoga(10, ['Focus Flow'], 'Hips')
exports.focusFlowYoga_20 = buildYoga(20, ['Focus Flow'], 'Hips')
exports.slowFlowYoga_20 = buildYoga(20, ['Slow Flow'])
exports.restorativeYoga_30 = buildYoga(30, ['Restorative'])

/////// STRENGTH ////////
exports.core_10 = {
	classType: ['Core'],		
	discipline: 'strength',
	duration: 600,
	preferredInstructors: [
		'Andy Speer',
		'Chase Tucker',
		'Robin Arzon',
		'Olivia Amato',
		'Emma Lovewell'
	]
}
const buildStrength = (duration, classType, titleSearchString) => {
	const strength = {
		classType,
		titleSearchString,
		discipline: 'strength',
		preferredInstructors: [
			'Andy Speer',
			'Chase Tucker',
			'Robin Arzon',
			'Adrian Williams'
		]
	};
	strength.duration = duration*60;
	return strength;
}

exports.lowerBodyStrength_30 = buildStrength(30, ['Lower Body']) 
exports.armsStrength_30 = buildStrength(30, ['Upper Body'], 'Arms') 
exports.chestStrength_20 = buildStrength(20, ['Upper Body'], 'Chest') 

/////// BOOTCAMP //////// 
exports.bootcamp_45 = {
	classType: ['Theme', 'Body Focus', 'Music', 'Bodyweight'],			
	discipline: 'bike_bootcamp',
	duration: 2700,
	preferredInstructors: [
		'Cody Rigsby',
		'Jess Sims',
		'Robin Arzon',
		'Tunde Oyeneyin'
	]
}


