const mongo = require('../lib/mongo');
const fetch = require('node-fetch');
const instructorsHash = require('../meta/instructors-hash.js');

const WorkoutModel = require('../models/workout');

const run = async () => {
	await mongo.client();
	
	var requestOptions = {
		method: 'GET',
		headers: {
			'Peloton-Platform': 'web',
			'Cookie': process.env.COOKIE
		},
		redirect: 'follow'
	};
	const response = await fetch(`https://api.onepeloton.com/api/user/${process.env.USER_ID}/workouts?joins=peloton.ride&limit=20&page=0&sort_by=-created`, requestOptions);
	const result = await response.json();
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
		console.log('wrote:', workouts[i].name, instructorsHash[workouts[i].peloton.ride.instructor_id].name)

		
		console.log('\n\n')
	}
	mongo.mongoose.connection.close();
};

run();


