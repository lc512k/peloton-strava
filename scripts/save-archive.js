const mongo = require('../lib/mongo');
const fetch = require('node-fetch');


const RideModel = require('../models/ride');

const run = async () => {
	await mongo.client();
	
	var requestOptions = {
		method: 'GET',
		headers: {
			'Peloton-Platform': 'web',
			'Cookie': process.env.COOKIE
		}
	};
	const response = await fetch(process.env.ARCHIVE_URL, requestOptions);
	console.log('response', response);
	const result = await response.json();
	console.log('loaded', result.data);
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