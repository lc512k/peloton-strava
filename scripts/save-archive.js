const mongo = require('../lib/mongo');
const fetch = require('node-fetch');


const RideModel = require('../models/ride');

const run = async () => {
	await mongo.client();
	//f0f617fad11d44d7a34f61a13462d289 is an unavailable cody ride
	const requestOptions = {
		method: 'GET',
		headers: {
			'Peloton-Platform': 'web',
			'Cookie': process.env.COOKIE
		}
	};
	const response = await fetch(process.env.ARCHIVE_URL, requestOptions);
	console.log('response', response);
	const result = await response.json();
	console.log('result', result);
	console.log('loaded', result.data.length);
	const rides = result.data;

	for (let i = 0; i < rides.length; i++) {
		const result = await RideModel.updateOne({_id:rides[i].id}, rides[i], {upsert: true, setDefaultsOnInsert: true});
		console.log(result)
		console.log('wrote:', rides[i].title, rides[i].description)
		console.log('\n\n')
	}
	mongo.mongoose.connection.close();
};

run();