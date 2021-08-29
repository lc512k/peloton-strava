module.exports = [{
		name: 'postRideStretch_5',
		discipline: 'stretching',
		duration: 5,
		instructors: {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 9},
		classType: ['Pre & Post-Ride Stretch'], 
		include: ['Post'],
		repeatsOk: true, 
		random: true
	},{
		name: 'fullBodyStretch_5',
		discipline: 'stretching',
		duration: 5,
		instructors: {'Matty Maggiacomo': 10, 'Ben Aldis': 10, 'Adrian Williams': 10, 'Hannah Corbin': 8},
		classType: ['Full Body Stretch'], 
		exclude: ['Post-Ride', 'Warm'],
		repeatsOk: true, 
	},{
		name: 'postRunStretch_5',
		discipline: 'stretching',
		duration: 5,
		instructors: {'Matty Maggiacomo': 1},
		classType: ['Pre & Post-Run Stretch'], 
		include: ['Post'],
		repeatsOk: true,
		random: true
	}
]

// exports.postRunStretch_5 = build('stretching', 5, {'Adrian Williams': 1}, ['Pre & Post-Run Stretch'], ['Post'], null, true, true)
// exports.armsStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Upper Body Stretch'], ['Arms'], ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
// exports.chestStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Upper Body Stretch'], ['Chest'], ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
// exports.fullBodyStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Matty Maggiacomo': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Full Body Stretch'], null, ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
// exports.lowerBodyStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Lower Body Stretch'], ['Legs'], ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
// exports.upperBodyStretch_5 = build('stretching', 5, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Upper Body Stretch'], null, ['Post-Ride', 'Warm', 'Foam'], false, true)
// exports.lowerBodyStretch_5 = build('stretching', 5, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Lower Body Stretch'], null, ['Post-Ride', 'Warm', 'Foam'], false, true)
