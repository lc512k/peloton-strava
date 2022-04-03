module.exports = [{
		name: 'postRideStretch_5',
		discipline: 'stretching',
		duration: 5,
		instructors: {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 9},
		classType: ['Pre & Post-Ride Stretch'], 
		include: ['Post'],
		repeatsOK: true, 
		random: true
	},{
		name: 'fullBodyStretch_5',
		discipline: 'stretching',
		duration: 5,
		instructors: {'Matty Maggiacomo': 10, 'Ben Aldis': 10, 'Adrian Williams': 10, 'Hannah Corbin': 8},
		classType: ['Full Body Stretch'], 
		exclude: ['Post-Ride', 'Warm'],
		repeatsOK: true, 
	},{
		name: 'fullBodyStretch_10',
		discipline: 'stretching',
		duration: 10,
		instructors: {'Adrian Williams': 10, 'Selena Samuela': 10, 'Matty Maggiacomo': 10, 'Ben Aldis': 10},
		classType: ['Full Body Stretch'], 
		exclude: ['Post-Ride', 'Warm'],
		repeatsOK: true, 
	},{
		name: 'upperBodyStretch_10',
		discipline: 'stretching',
		duration: 10,
		instructors: {'Selena Samuela': 10, 'Hannah Corbin': 8, 'Matty Maggiacomo': 9, 'Ben Aldis': 10},
		classType: ['Upper Body Stretch'], 
		exclude: ['Post-Ride', 'Warm'],
		repeatsOK: true, 
	},{
		name: 'lowerBodyStretch_10',
		discipline: 'stretching',
		duration: 10,
		instructors: {'Selena Samuela': 10, 'Hannah Corbin': 8, 'Matty Maggiacomo': 9, 'Ben Aldis': 10},
		classType: ['Lower Body Stretch'], 
		exclude: ['Post-Ride', 'Warm'],
		repeatsOK: true, 
	},{
		name: 'upperBodyStretch_5',
		discipline: 'stretching',
		duration: 5,
		instructors: {'Selena Samuela': 10, 'Hannah Corbin': 8, 'Matty Maggiacomo': 9, 'Ben Aldis': 10},
		classType: ['Upper Body Stretch'], 
		exclude: ['Post-Ride', 'Warm'],
		repeatsOK: true, 
	},{
		name: 'postRunStretch_5',
		discipline: 'stretching',
		duration: 5,
		instructors: {'Matty Maggiacomo': 1},
		classType: ['Pre & Post-Run Stretch'], 
		include: ['Post'],
		repeatsOK: true,
		random: true
	}
]

// exports.postRunStretch_5 = build('stretching', 5, {'Adrian Williams': 1}, ['Pre & Post-Run Stretch'], ['Post'], null, true, true)
// exports.armsStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Upper Body Stretch'], ['Arms'], ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
// exports.chestStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Upper Body Stretch'], ['Chest'], ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
// exports.lowerBodyStretch_10 = build('stretching', 10, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Lower Body Stretch'], ['Legs'], ['Seated', 'Foam', 'Post-Ride', 'Warm'], false, true)
// exports.upperBodyStretch_5 = build('stretching', 5, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Upper Body Stretch'], null, ['Post-Ride', 'Warm', 'Foam'], false, true)
// exports.lowerBodyStretch_5 = build('stretching', 5, {'Andy Speer': 9, 'Ben Aldis': 9, 'Adrian Williams': 10, 'Hannah Corbin': 8}, ['Lower Body Stretch'], null, ['Post-Ride', 'Warm', 'Foam'], false, true)
