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
		},
		redirect: 'follow'
	};
	const response = await fetch(process.env.ARCHIVE_URL, requestOptions);
	const result = await response.json();
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