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

const buildRide = (duration, classType, titleSearchString) => {
	const ride = {
		classType: ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ', 'Climb', 'Power Zone'],
		discipline: 'cycling',
		preferredInstructors: [
			'Cody Rigsby',
			'Robin Arzon'
		]
	};
	ride.duration = duration*60;
	return ride;
}

exports.ride_15 = buildRide(15);
exports.ride_20 = buildRide(20);
exports.ride_30 = buildRide(30);
exports.ride_45 = buildRide(45);
exports.ride_60 = buildRide(60);

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

exports.fullBodyStretch_5 = {
	classType: ['Full Body Stretch'],
	discipline: 'stretching',
	duration: 300,
	preferredInstructors: [
		'Hannah Corbin',
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


