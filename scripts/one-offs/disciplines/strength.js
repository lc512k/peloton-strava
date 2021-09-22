module.exports = [{
		name: 'coreWarmUp_5',
		discipline: 'strength',
		duration: 5,
		instructors: {'Matty Maggiacomo': 10, 'Jess Sims': 10, 'Andy Speer': 10, 'Adrian Williams': 10, 'Ben Aldis': 9},
		classType: ['Warm Up'], 
		include: ['Core'],
		repeatsOK: true, 
		random: true
	},{
		name: 'core_5',
		discipline: 'strength',
		duration: 5,
		instructors: {'Matty Maggiacomo': 10, 'Jess Sims': 10, 'Andy Speer': 10, 'Adrian Williams': 10, 'Ben Aldis': 9},
		classType: ['Core'],
	},{
		name: 'core_10',
		discipline: 'strength',
		duration: 10,
		instructors: {'Matty Maggiacomo': 2, 'Jess Sims': 2,'Rad Lopez': 2, 'Andy Speer': 1, 'Adrian Williams': 1, 'Ben Aldis': 1},
		classType: ['Core'],
	},{
		name: 'upperBodyWarmUp_5',
		discipline: 'strength',
		duration: 5,
		instructors: {'Jess Sims': 10, 'Adrian Williams': 10, 'Andy Speer': 10, 'Ben Aldis': 9},
		classType: ['Warm Up'], 
		include: ['Upper Body'],
		repeatsOK: true, 
		random: true
	},{
		name: 'upperBodyStrength_30',
		discipline: 'strength',
		duration: 30,
		instructors: {'Jess Sims': 10, 'Adrian Williams': 10, 'Andy Speer': 10},
		classType: ['Upper Body'],
		include: ['Upper Body']
	}
]




// exports.fullBodyWarmUp_10 = build('strength', 10, 		{'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Warm Up'], ['Full Body'], null, true, true) 
// exports.fullBodyStrength_45 = build('strength', 45, 	{'Andy Speer': 9, 'Adrian Williams': 10}, ['Full Body'], null, null, true, false) 

// exports.lowerBodyStrength_30 = build('strength', 30, 	{'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Lower Body'], ['Lower Body']) 
// exports.lowerBodyWarmUp_5 = build('strength', 5, 		{'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Warm Up'], ['Lower Body'], null, true, true) 
// exports.lowerBodyStrength_20 = build('strength', 20, 	{'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Lower Body'], ['Lower Body']) 

// exports.upperBodyStrength_20 = build('strength', 20, 	{'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Upper Body']) 
// exports.armsStrength_30 = build('strength', 30,			{'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Arms']) 
// exports.armsStrength_20 = build('strength', 20, 		{'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Arms']) 
// exports.chestStrength_20 = build('strength', 20, 		{'Andy Speer': 9, 'Chase Tucker': 10, 'Robin Arzon': 10, 'Adrian Williams': 10}, ['Upper Body'], ['Chest']) 
