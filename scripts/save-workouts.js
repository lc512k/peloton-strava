const mongo = require('../lib/mongo');
const fetch = require('node-fetch');

const WorkoutModel = require('../models/workout');

const run = async () => {
	await mongo.client();
	
	var requestOptions = {
		method: 'GET',
		headers: {
			'Peloton-Platform': 'web',
			'Cookie': '__cfduid=d82ed40f6538bcf66ba8a93e314b4ed711613584860; __cfruid=bca8f5ff09f743b9c93b4a1ef8d00eb88fb1ff1e-1613585545; peloton_session_id=66a7d1e900db49db9b7b2d212da1b371'
		},
		redirect: 'follow'
	};
	const response = await fetch(`https://api.onepeloton.com/api/user/${process.env.USER_ID}/workouts?joins=peloton.ride&limit=1000&page=0&sort_by=-created`, requestOptions);
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
		console.log('wrote:', workouts[i].title, workouts[i].description)
		console.log('\n\n')
	}
	mongo.mongoose.connection.close();
};

run();


