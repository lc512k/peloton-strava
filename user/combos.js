const build = (discipline, duration, preferredInstructors, classType, includeStrings, excludeStrings, preferences) => {
	return {
		classType,
		duration: duration,
		includeStrings,
		discipline,
 		excludeStrings,
		preferredInstructors,
		preferences: preferences || {repeatsOK: false, random: false}
	};
}
/////// CYCLING ///////
exports.warmUpRide_5 = build('cycling',5, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10, 'Ben Aldis': 8}, ['Low Impact'], ['Warm Up'], ['Cool Down'], {repeatsOK: true, random: true});
exports.coolDownRide_5 = build('cycling',5, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10, 'Ben Aldis': 8}, ['Low Impact'], null, ['Warm Up'], ['Cool Down'], {repeatsOK: true, random: true});
exports.recoveryRide_20 = build('cycling',20, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 8}, ['Low Impact', 'Beginner'], ['Recovery', 'Low Impact'], ['Prenatal']);
exports.ride_20 = build('cycling',20, {'Cody Rigsby': 10, 'Robin Arzon': 8, 'Robin Arzon': 5}, ['Music', 'Theme', 'Groove'], null, ['Arms', 'Endurance']);
exports.ride_30 = build('cycling',30, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ', 'Climb', 'Power Zone'], null, ['Arms', 'Endurance']);
exports.ride_45 = build('cycling',45, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ'], null, ['Arms', 'Endurance']);
exports.ride_60 = build('cycling',60, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Live DJ'], null, ['Arms', 'Endurance']);
exports.ride_45_arms = build('cycling',45, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ'], ['Arms'], ['Endurance']);
exports.ride_60_arms = build('cycling',60, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Live DJ'], ['Arms'], ['Endurance']);
/////// STRETCHING ///////
exports.postRideStretch_5 = build('stretching', 5, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10}, ['Pre & Post-Ride Stretch'], ['Post'], null, {repeatsOK: true, random: true})
exports.armsStretch_10 = build('stretching', 10, {'Andy Speer': 10, 'Hannah Corbin': 10, 'Denis Morton': 10}, ['Upper Body Stretch'], ['Arms'], ['Foam', 'Ride'], {repeatsOK: false, random: true})
exports.chestStretch_10 = build('stretching', 10, {'Andy Speer': 10, 'Hannah Corbin': 10, 'Denis Morton': 10}, ['Upper Body Stretch'], ['Chest'], ['Foam', 'Ride'], {repeatsOK: false, random: true})
exports.fullBodyStretch_10 = build('stretching', 10, {'Andy Speer': 10, 'Hannah Corbin': 10, 'Denis Morton': 10}, ['Full Body Stretch'], null, ['Foam', 'Ride'], {repeatsOK: false, random: true})
exports.upperBodyStretch_10 = build('stretching', 10, {'Andy Speer': 10, 'Hannah Corbin': 10, 'Denis Morton': 10}, ['Upper Body Stretch'], null, ['Foam', 'Ride'], {repeatsOK: false, random: true})
exports.lowerBodyStretch_10 = build('stretching', 10, {'Andy Speer': 10, 'Hannah Corbin': 10, 'Denis Morton': 10}, ['Lower Body Stretch'], null, ['Foam', 'Ride'], {repeatsOK: false, random: true})
/////// YOGA ///////
exports.focusFlowYoga_10 = build('yoga', 10, {'Aditi Shah': 10, 'Anna Greenberg': 10, 'Denis Morton': 10}, ['Focus Flow'], ['Hips'])
exports.focusFlowYoga_20 = build('yoga', 20, {'Aditi Shah': 10, 'Anna Greenberg': 10, 'Denis Morton': 10}, ['Focus Flow'], ['Hips'])
exports.slowFlowYoga_20 = build('yoga', 20, {'Aditi Shah': 10, 'Anna Greenberg': 10, 'Denis Morton': 10}, ['Slow Flow'])
exports.slowFlowYoga_45 = build('yoga', 45, {'Aditi Shah': 10, 'Anna Greenberg': 10, 'Denis Morton': 10}, ['Slow Flow'])
exports.restorativeYoga_20 = build('yoga', 20, {'Aditi Shah': 10, 'Anna Greenberg': 10, 'Denis Morton': 10}, ['Restorative'])
exports.restorativeYoga_30 = build('yoga', 30, {'Aditi Shah': 10, 'Anna Greenberg': 10, 'Denis Morton': 10}, ['Restorative'])
/////// STRENGTH ////////
exports.core_10 = build('strength', 10, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Core']) 
exports.lowerBodyStrength_30 = build('strength', 30, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Lower Body'], ['Lower Body']) 
exports.uperBodyStrength_30 = build('strength', 30, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Upper Body']) 
exports.lowerBodyStrength_20 = build('strength', 20, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Lower Body'], ['Lower Body']) 
exports.uperBodyStrength_20 = build('strength', 20, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Upper Body']) 
exports.armsStrength_30 = build('strength', 30, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Arms']) 
exports.armsStrength_20 = build('strength', 20, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Arms']) 
exports.chestStrength_20 = build('strength', 20, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Chest']) 
/////// BOOTCAMP //////// 
exports.bootcamp_45 = build('bike_bootcamp', 45, {'Cody Rigsby': 10, 'Jess Sims': 4, 'Robin Arzon': 8, 'Tunde Oyeneyin': 5}, ['Theme', 'Body Focus', 'Music', 'Bodyweight']) 
exports.bootcamp_30 = build('bike_bootcamp', 30, {'Cody Rigsby': 10, 'Jess Sims': 4, 'Robin Arzon': 8, 'Tunde Oyeneyin': 5}, ['Theme', 'Body Focus', 'Music', 'Bodyweight']) 
/////// WALKING //////// 
exports.walk_20 = build('walking', 20, {'Jess Sims': 10, 'Robin Arzon': 10}, ['Walking'], null, ['Run'], {repeatsOK: false, random: true})



