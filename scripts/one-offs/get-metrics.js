

const mongo = require('../../lib/mongo');
const fetch = require('node-fetch');
const login = require('../login');
const instructorsHash = require('../../meta/instructors-hash.js');

const WorkoutModel = require('../../models/workout');

const run = async () => {
	await mongo.client();
	cookie = await login();
	
	const requestOptions = {
		method: 'GET',
		headers: {
			'Peloton-Platform': 'web',
			'Cookie': cookie
		},
		redirect: 'follow'
	};


	const workouts = await WorkoutModel.find({}).lean().exec();
	console.log('I have done ',workouts.length)

	for (workout of workouts) {
		const riderUrl = `https://api.onepeloton.com/api/ride/${workout.ride_id}`
		const rideResponse = await fetch(riderUrl, requestOptions);
		const rideResult = await rideResponse.json();


		// console.log('RIDE', {discipline: rideResult.fitness_discipline, duration: rideResult.duration})

		if (rideResult.fitness_discipline === 'cycling'){
			const url = `https://api.onepeloton.com/api/workout/${workout._id}/performance_graph?every_n=60`
			const response = await fetch(url, requestOptions);
			const result = await response.json();
			const distance = result.summaries.filter(summary => summary.slug === 'distance')[0].value
			console.log(rideResult.duration, rideResult.title, '*', distance);
			// console.log(distance)
		}
	}
	// console.log(result.data, result.data.length);
	// const workouts = result.data;

	// for (let i = 0; i < workouts.length; i++) {

	// 	const miniWorkout = {	
	// 		created_at: workouts[i].created_at,
	// 		ride_id: workouts[i].peloton.ride.id
	// 	}

	// 	console.log(miniWorkout);

	// 	const result = await WorkoutModel.updateOne({_id:workouts[i].id}, miniWorkout, {upsert: true, setDefaultsOnInsert: true});
	// 	console.log(result)
	// 	console.log('wrote:', workouts[i].name, instructorsHash[workouts[i].peloton.ride.instructor_id] ? instructorsHash[workouts[i].peloton.ride.instructor_id].name : workouts[i].peloton.ride.instructor_id)

		
	// 	console.log('\n\n')
	// }
	mongo.mongoose.connection.close();
};

run();


