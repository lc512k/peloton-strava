/////// CYCLING ///////
const buildRide = (duration, preferredInstructors, classType, titleSearchString, titleExcludeString, titlePreferredString) => {
	const ride = {
		classType,
		duration: duration*60,
		titleSearchString,
		discipline: 'cycling',
		titlePreferredString,
		titleExcludeString,
		preferredInstructors
	};
	return ride;
}
exports.warmUpRide_5 = buildRide(5, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10, 'Sam Yo': 10}, ['Low Impact'], null, null, 'Warm Up');
exports.coolDownRide_5 = buildRide(5, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10, 'Sam Yo': 10}, ['Low Impact'], null, null, 'Cool Down');
exports.recoveryRide_20 = buildRide(20, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 8, 'Christine D\'Erecole': 6, 'Sam Yo': 5}, ['Low Impact', 'Beginner', 'Recovery']);
exports.ride_20 = buildRide(20, {'Cody Rigsby': 10, 'Robin Arzon': 8, 'Robin Arzon': 5}, ['Music', 'Theme', 'Groove'], null, 'Arms');
exports.ride_30 = buildRide(30, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ', 'Climb', 'Power Zone'], null, 'Endurance');
exports.ride_45 = buildRide(45, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ'], null, 'Endurance', 'Arms');

/////// STRETCH ///////
exports.postRideStretch_5 = {
	classType: ['Pre & Post-Ride Stretch'],
	titleSearchString: 'Post',
	discipline: 'stretching',
	duration: 300,
	repeatsOk: true,
	preferredInstructors: [
		{'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10}
	]
}

const buildStretch = (duration, classType, titleSearchString) => {
	const stretch = {
		classType,
		titleSearchString,
		duration: duration*60,
		discipline: 'stretching',
		titleExcludeString: 'Foam',
		preferredInstructors: {
			'Andy Speer': 10,
			'Hannah Corbin': 9,
			'Denis Morton': 9,
			'Robin Arzon': 8,
			'Ben Aldis': 7
		}
	};
	return stretch;
}

exports.armsStretch_10 = buildStretch(10, ['Upper Body Stretch'], 'Arms')
exports.chestStretch_10 = buildStretch(10, ['Upper Body Stretch'], 'Chest')
exports.fullBodyStretch_10 = buildStretch(10, ['Full Body Stretch'])
exports.upperBodyStretch_10 = buildStretch(10, ['Upper Body Stretch'])
exports.lowerBodyStretch_10 = buildStretch(10, ['Lower Body Stretch'])

/////// YOGA ///////
const buildYoga = (duration, classType,  titleSearchString, titleExcludeString, titlePreferredString) => {
	const yoga = {
		classType,
		titleSearchString,
		duration: duration*60,
		titlePreferredString,
		discipline: 'yoga',
		preferredInstructors: {'Aditi Shah': 10, 'Anna Greenberg': 10, 'Denis Morton': 10}
		
	};
	return yoga;
}
exports.focusFlowYoga_10 = buildYoga(10, ['Focus Flow'], 'Hips', null, 'Focus')
exports.focusFlowYoga_20 = buildYoga(20, ['Focus Flow'], 'Hips', null, 'Focus')
exports.slowFlowYoga_20 = buildYoga(20, ['Slow Flow'])
exports.restorativeYoga_30 = buildYoga(30, ['Restorative'])

/////// STRENGTH ////////
exports.core_10 = {
	classType: ['Core'],		
	discipline: 'strength',
	duration: 600,
	preferredInstructors: {'Andy Speer': 10, 'Chase Tucker': 8, 'Robin Arzon': 6, 'Emma Lovewell': 4}
	
}
const buildStrength = (duration, classType, titleSearchString) => {
	const strength = {
		classType,
		duration: duration*60,
		titleSearchString,
		discipline: 'strength',
		preferredInstructors: {'Andy Speer': 10, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}
	};
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
	preferredInstructors: {'Cody Rigsby': 10, 'Jess Sims': 10, 'Robin Arzon': 10, 'Tunde Oyeneyin': 10}
}


