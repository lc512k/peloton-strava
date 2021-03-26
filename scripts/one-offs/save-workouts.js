const mongo = require('../lib/mongo');
const fetch = require('node-fetch');
const login = require('./login');
const instructorsHash = require('../meta/instructors-hash.js');

const WorkoutModel = require('../models/workout');

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
	const url = process.env.WORKOUTS_URL;
	const response = await fetch(url, requestOptions);
	const result = await response.json();
	console.log('requesting', {url, requestOptions})
	console.log({result})
	console.log(result.data, result.data.length);
	const workouts = result.data;

	for (let i = 0; i < workouts.length; i++) {

		const miniWorkout = {	
			created_at: workouts[i].created_at,
			ride_id: workouts[i].peloton.ride.id
		}

		console.log(miniWorkout);

		const result = await WorkoutModel.updateOne({_id:workouts[i].id}, miniWorkout, {upsert: true, setDefaultsOnInsert: true});
		console.log(result)
		console.log('wrote:', workouts[i].name, instructorsHash[workouts[i].peloton.ride.instructor_id] ? instructorsHash[workouts[i].peloton.ride.instructor_id].name : workouts[i].peloton.ride.instructor_id)

		
		console.log('\n\n')
	}
	mongo.mongoose.connection.close();
};

run();


