module.exports = [{
		name: 'warmUpRide_10',
		discipline: 'cycling',
		duration: 10,
		instructors: {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10},
		classType: ['Low Impact'], 
		include: ['Warm Up'],
		exclude: ['Cool Down'], 
		repeatsOK: true, 
		random: true
	},
	{
		name: 'warmUpRide_5',
		discipline: 'cycling',
		duration: 5,
		instructors:{'Cody Rigsby': 10, 'Tunde Oyeneyin': 10},
		classType: ['Low Impact'], 
		include: ['Warm Up'],
		exclude: ['Cool Down'], 
		repeatsOK: true, 
		random: true
	},
	{
		name: 'coolDownRide_5',
		discipline: 'cycling',
		duration: 5, 
		instructors: {'Cody Rigsby': 10, 'Tunde Oyeneyin': 9, 'Matt Wilpers': 9},
		classType: ['Low Impact'],
		include: ['Cool Down'], 
		exclude: ['Warm Up'], 
		repeatsOK: true, 
		random: true
	},
	{
		name: 'recoveryRide_20',
		discipline: 'cycling',
		duration: 20,
		instructors: {'Matt Wilpers': 10, 'Tunde Oyeneyin': 9},
		classType: ['Low Impact', 'Beginner'], 
		include: ['Recovery', 'Low Impact'], 
		exclude: ['Prenatal']
	},
	{
		name: 'ride_10',
		discipline: 'cycling',
		duration: 10,
		instructors: {'Cody Rigsby': 10, 'Tunde Oyeneyin': 10, 'Robin Arzon': 9},
		classType: ['Climb']
	},
	{
		name: 'ride_15',
		discipline: 'cycling',
		duration: 15,
		instructors: {'Cody Rigsby': 10},
		classType: ['Music', 'Theme', 'Groove']
	},
	{
		name: 'ride_20',
		discipline: 'cycling',
		duration: 20,
		instructors: {'Cody Rigsby': 10},
		classType: ['Music', 'Theme', 'Groove']
	},
	{
		name: 'ride_30',
		discipline: 'cycling',
		duration: 30,
		instructors: {'Cody Rigsby': 10},
		classType: ['Music', 'Theme', 'Live DJ', 'Groove'],
		exclude: ['Arms']
	},
	{
		name: 'ride_45',
		discipline: 'cycling',
		duration: 45,
		instructors: {'Cody Rigsby': 10},
		classType: ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ'],
		exclude: ['Arms']
	},
	{
		name: 'ride_60',
		discipline: 'cycling',
		duration: 60,
		instructors: {'Cody Rigsby': 10},
		classType: ['Music', 'Theme', 'Groove', 'Live DJ'],
		exclude: ['Arms']
	},
	{
		name: 'ride_45_arms',
		discipline: 'cycling',
		duration: 45,
		instructors: {'Cody Rigsby': 10},
		classType: ['Music', 'Theme', 'Groove', 'Intervals', 'Live DJ'],
		include: ['Arms']
	},
	{
		name: 'ride_60_arms',
		discipline: 'cycling',
		duration: 60,
		instructors: {'Cody Rigsby': 10, 'Robin Arzon': 10},
		classType: ['Music', 'Theme', 'Groove', 'Live DJ'],
		include: ['Arms']
	}
]