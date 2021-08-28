const build = (discipline, duration, preferredInstructors, classType, titleIncludeStrings, titleExcludeStrings, repeatsOK, random) => {
	return {
		classType,
		duration,
		titleIncludeStrings,
 		titleExcludeStrings,
		discipline,
		preferredInstructors,
		repeatsOK,
		random
	};
}
/////// CYCLING ///////
exports.warmUpRide_10 = build('cycling', 10, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10, 'Ben Aldis': 8}, ['Low Impact'], ['Warm Up'], ['Cool Down'], true, true);
exports.warmUpRide_5 = build('cycling', 5, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10, 'Ben Aldis': 8}, ['Low Impact'], ['Warm Up'], ['Cool Down'], true, true);
exports.coolDownRide_5 = build('cycling',5, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10, 'Ben Aldis': 8}, ['Low Impact'], ['Cool Down'], ['Warm Up'], true, true);
exports.recoveryRide_20 = build('cycling',20, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 8}, ['Low Impact', 'Beginner'], ['Recovery', 'Low Impact'], ['Prenatal']);
exports.ride_10 = build('cycling',10, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 8, 'Robin Arzon': 5}, ['Climb'], null, ['Arms', 'Endurance']);
exports.ride_15 = build('cycling',15, {'Cody Rigsby': 10, 'Robin Arzon': 8, 'Robin Arzon': 5}, ['Music', 'Theme', 'Groove'], null, ['Arms', 'Endurance']);
exports.ride_20 = build('cycling',20, {'Cody Rigsby': 10, 'Robin Arzon': 8, 'Robin Arzon': 5}, ['Music', 'Theme', 'Groove'], null, ['Arms', 'Endurance'], false, false);
exports.ride_30 = build('cycling',30, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Live DJ', 'Groove'], null, ['Arms', 'Endurance'], false, false);
exports.ride_45 = build('cycling',45, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ'], null, ['Arms', 'Endurance']);
exports.ride_60 = build('cycling',60, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Live DJ'], null, ['Arms', 'Endurance']);
exports.ride_45_arms = build('cycling',45, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ'], ['Arms'], ['Endurance']);
exports.ride_60_arms = build('cycling',60, {'Cody Rigsby': 10, 'Robin Arzon': 10}, ['Music', 'Theme', 'Groove', 'Live DJ'], ['Arms'], ['Endurance']);
/////// STRETCHING ///////
exports.postRideStretch_5 = build('stretching', 5, {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 10}, ['Pre & Post-Ride Stretch'], ['Post'], null, true, true)
exports.armsStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Upper Body Stretch'], ['Arms'], ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
exports.chestStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Upper Body Stretch'], ['Chest'], ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
exports.fullBodyStretch_5 = build('stretching', 5, {'Matty Maggiacomo': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Full Body Stretch'], null, ['Post-Ride', 'Warm'], true, false)
exports.fullBodyStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Full Body Stretch'], null, ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
exports.lowerBodyStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Lower Body Stretch'], ['Legs'], ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
exports.upperBodyStretch_5 = build('stretching', 5, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Upper Body Stretch'], null, ['Post-Ride', 'Warm', 'Foam'], false, true)
exports.lowerBodyStretch_5 = build('stretching', 5, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Lower Body Stretch'], null, ['Post-Ride', 'Warm', 'Foam'], false, true)
/////// YOGA ///////
exports.focusFlowYogaHips_10 = build('yoga', 10, {'Aditi Shah': 10, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 9, 'Denis Morton': 9}, ['Focus Flow'], ['Hips'])
exports.focusFlowYoga_10 = build('yoga', 10, {'Aditi Shah': 10, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 9, 'Denis Morton': 9}, ['Focus Flow'])
exports.focusFlowYoga_20 = build('yoga', 20, {'Aditi Shah': 10, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 9, 'Denis Morton': 9}, ['Focus Flow'])
exports.slowFlowYoga_20 = build('yoga', 20, {'Aditi Shah': 10, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 9, 'Denis Morton': 9}, ['Slow Flow'])
exports.slowFlowYoga_30 = build('yoga', 30, {'Aditi Shah': 10, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 9, 'Denis Morton': 9}, ['Slow Flow'])
exports.slowFlowYoga_45 = build('yoga', 45, {'Aditi Shah': 10, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 9, 'Denis Morton': 9}, ['Slow Flow'])
exports.restorativeYoga_20 = build('yoga', 20, {'Aditi Shah': 10, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 9, 'Denis Morton': 9}, ['Restorative'])
exports.restorativeYoga_30 = build('yoga', 30, {'Aditi Shah': 10, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 9, 'Denis Morton': 9}, ['Restorative'])
exports.standingYoga_10 = build('yoga', 10, {'Aditi Shah': 9, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 8, 'Denis Morton': 9}, ['Yoga Anywhere'],['Standing'])
exports.standingYoga_5 = build('yoga', 5, {'Aditi Shah': 9, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 8, 'Denis Morton': 9}, ['Yoga Anywhere'],['Standing'])
exports.chairYoga_10 = build('yoga', 10, {'Aditi Shah': 9, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 8, 'Denis Morton': 9}, ['Yoga Anywhere'],['Chair'])
exports.chairYoga_5 = build('yoga', 5, {'Aditi Shah': 9, 'Chelsea Jackson Roberts': 10, 'Anna Greenberg': 8, 'Denis Morton': 9}, ['Yoga Anywhere'],['Chair'])
/////// STRENGTH ////////
exports.core_5 = build('strength', 5, {'Cody Rigsby': 10, 'Andy Speer': 10, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Core'], null, null, true, true) 
exports.core_10 = build('strength', 10, {'Cody Rigsby': 10, 'Andy Speer': 10, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Core'], null, null, true, true) 
exports.lowerBodyStrength_30 = build('strength', 30, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Lower Body'], ['Lower Body']) 
exports.upperBodyStrength_30 = build('strength', 30, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Upper Body']) 
exports.fullBodyStrength_45 = build('strength', 45, {'Andy Speer': 9, 'Adrian Williams': 10}, ['Full Body'], null, null, true, false) 
exports.lowerBodyWarmUp_5 = build('strength', 5, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Warm Up'], ['Lower Body'], null, true, true) 
exports.upperBodyWarmUp_5 = build('strength', 5, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Warm Up'], ['Upper Body'], null, true, true) 
exports.fullBodyWarmUp_10 = build('strength', 10, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Warm Up'], ['Full Body'], null, true, true) 
exports.coreWarmUp_5 = build('strength', 5, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Warm Up'], ['Core'], null, true, true) 
exports.lowerBodyStrength_20 = build('strength', 20, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Lower Body'], ['Lower Body']) 
exports.upperBodyStrength_20 = build('strength', 20, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Upper Body']) 
exports.armsStrength_30 = build('strength', 30, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Arms']) 
exports.armsStrength_20 = build('strength', 20, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Arms']) 
exports.chestStrength_20 = build('strength', 20, {'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Chest']) 
/////// BOOTCAMP //////// 
exports.bootcamp_45 = build('bike_bootcamp', 45, {'Cody Rigsby': 10, 'Jess Sims': 4, 'Robin Arzon': 8, 'Tunde Oyeneyin': 5}, ['Theme', 'Body Focus', 'Music', 'Bodyweight']) 
exports.bootcamp_30 = build('bike_bootcamp', 30, {'Cody Rigsby': 10, 'Jess Sims': 4, 'Robin Arzon': 8, 'Tunde Oyeneyin': 5}, ['Theme', 'Body Focus', 'Music', 'Bodyweight']) 
/////// WALKING //////// 
exports.walk_20 = build('walking', 20, {'Jess Sims': 10, 'Robin Arzon': 10}, ['Walking'], null, ['Run'], false, true)



