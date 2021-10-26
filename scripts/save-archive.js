const mongo = require('../lib/mongo');
const fetch = require('node-fetch');


const RideModel = require('../models/ride');

const run = async () => {
	await mongo.client();
	//f0f617fad11d44d7a34f61a13462d289 is an unavailable cody ride
	let page = 0;
	let max = Number(process.env.MAX_PAGES);
	do {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Peloton-Platform': 'web',
				'Cookie': process.env.COOKIE
			}
		};
		const response = await fetch(process.env.ARCHIVE_URL + `&page=${page}`, requestOptions);
		console.log('response', response);
		const result = await response.json();
		// console.log('result', result);
		console.log('loaded', result.data.length);
		console.log('pagess', result.page_count);
		const rides = result.data;
		max = max || result.page_count;
		console.log({max, page})

		if (page < max) {
			page = page + 1;
			morePages = true;
		}
		else {
			morePages = false;
		}

		for (let i = 0; i < rides.length; i++) {
			const result = await RideModel.updateOne({_id:rides[i].id}, rides[i], {upsert: true, setDefaultsOnInsert: true});
			console.log(result)
			console.log('wrote:', rides[i].title, rides[i].description)
			console.log('\n\n')
		}
	} while(morePages)
	mongo.mongoose.connection.close();
};

run();