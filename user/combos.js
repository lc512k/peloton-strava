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



recoveryRide_20 = {
	classType: ['Low Impact', 'Beginner'],
	discipline: 'cycling',
	duration: 300,
	preferredInstructors: [
		'Cody Rigsby',
		'Matt Wilpers',
		'Christine D\'Erecole',
		'Sam Yo',
		'Tunde Oyeneyin',
		'Robin Arzon',
		'Ally Love',
		'Hannah Frankson'
	]
}

const buildRide = (duration, classType, titleExcludeString) => {
	const ride = {
		classType,
		discipline: 'cycling',
		titleExcludeString,
		preferredInstructors: [
			'Cody Rigsby',
			'Robin Arzon'
		]
	};
	ride.duration = duration*60;
	return ride;
}

exports.ride_20 = buildRide(20, ['Music', 'Theme', 'Groove'], 'Arms');
exports.ride_30 = buildRide(30, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ', 'Climb', 'Power Zone'], 'Endurance');
exports.ride_45 = buildRide(45, ['Music', 'Theme', 'Groove', 'Live DJ'], 'Endurance');

/////// STRETCH ///////

exports.fullBodyStretch_10 = {
	classType: ['Full Body Stretch'],
	discipline: 'stretching',
	duration: 600,
	preferredInstructors: [
		'Hannah Corbin',
		'Denis Morton',
		'Ben Aldis',
		'Robin Arzon'
	]
}

exports.upperBodyStretch_10 = {
	classType: ['Upper Body Stretch'],
	discipline: 'stretching',
	titleExcludeString: 'Foam',
	duration: 600,
	preferredInstructors: [
		'Hannah Corbin',
		'Andy Speer',
		'Denis Morton',
		'Ben Aldis',
		'Robin Arzon'
	]
}

exports.lowerBodyStretch_10 = {
	classType: ['Lower Body Stretch'],
	discipline: 'stretching',
	titleExcludeString: 'Foam',
	duration: 600,
	preferredInstructors: [
		'Hannah Corbin',
		'Andy Speer',
		'Denis Morton',
		'Ben Aldis',
		'Robin Arzon'
	]
}

const buildStretch = (duration, classType, titleSearchString) => {
	const stretch = {
		classType: ['Lower Body Stretch'],
		discipline: 'stretching',
		titleExcludeString: 'Foam',
		duration: 600,
		preferredInstructors: [
			'Hannah Corbin',
			'Andy Speer',
			'Denis Morton',
			'Ben Aldis',
			'Robin Arzon'
		]
	};
	stretch.duration = duration*60;
	return stretch;
}

armsStretch_10 = {
	classType: ['Upper Body Stretch'],
	discipline: 'stretching',
	titleSearchString: 'Arms',
	duration: 600,
	preferredInstructors: [
		'Andy Speer',
		'Hannah Corbin',
		'Denis Morton',
		'Ben Aldis',
		'Robin Arzon'
	]
}

chestStretch_10 = {
	classType: ['Upper Body Stretch'],
	discipline: 'stretching',
	titleSearchString: 'Chest',
	duration: 600,
	preferredInstructors: [
		'Andy Speer',
		'Hannah Corbin',
		'Denis Morton',
		'Ben Aldis',
		'Robin Arzon'
	]
}

exports.fullBodyStretch_5 = {
	classType: ['Full Body Stretch'],
	discipline: 'stretching',
	duration: 300,
	preferredInstructors: [
		'Hannah Corbin',
		'Andy Speer',
		'Denis Morton',
		'Ben Aldis',
		'Robin Arzon'
	]
}
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

/////// YOGA ///////

exports.focusFlowYoga_10 = {
	classType: ['Focus Flow'],
	discipline: 'yoga',
	titleSearchString: 'Hips',
	duration: 600,
	preferredInstructors: [
		'Aditi Shah',
		'Anna Greenberg',
		'Denis Morton'
	]
}

exports.focusFlowYoga_20 = {
	classType: ['Focus Flow'],
	discipline: 'yoga',
	titleSearchString: 'Hips',
	duration: 1200,
	preferredInstructors: [
		'Aditi Shah',
		'Anna Greenberg',
		'Denis Morton'
	]
}

exports.slowFlowYoga_20 = {
	classType: ['Focus Flow'],
	discipline: 'yoga',
	duration: 1200,
	preferredInstructors: [
		'Aditi Shah',
		'Anna Greenberg',
		'Denis Morton',
		'Ross Rayburn'
	]
}

exports.restorativeYoga_30 = {
	classType: ['Restorative'],
	discipline: 'yoga',
	duration: 1800,
	preferredInstructors: [
		'Aditi Shah',
		'Anna Greenberg',
		'Denis Morton'
	]
}

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

exports.lowerBodyStrength_30 = {
	classType: ['Lower Body'],		
	discipline: 'strength',
	duration: 1800,
	preferredInstructors: [
		'Andy Speer',
		'Chase Tucker',
		'Robin Arzon',
		'Adrian Williams'
	]
}

exports.armsStrength_30 = {
	classType: ['Upper Body'],		
	discipline: 'strength',
	titleSearchString: 'Arms',
	duration: 1800,
	preferredInstructors: [
		'Andy Speer',
		'Chase Tucker',
		'Robin Arzon',
		'Adrian Williams'
	]
}

exports.chestStrength_20 = {
	classType: ['Upper Body'],			
	discipline: 'strength',
	titleSearchString: 'Chest',
	duration: 1800,
	preferredInstructors: [
		'Andy Speer',
		'Chase Tucker',
		'Robin Arzon',
		'Adrian Williams'
	]
}

/////// BOOTCAMP //////// 

exports.bootcamp_45 = {
	classType: ['Bike Bootcamp'],			
	discipline: 'cycling',
	duration: 2700,
	preferredInstructors: [
		'Cody Rigsby',
		'Jess Sims',
		'Robin Arzon',
		'Tunde Oyeneyin'
	]
}


