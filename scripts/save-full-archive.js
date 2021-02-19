const mongo = require('../lib/mongo');
const fetch = require('node-fetch');

const cycling = require('../meta/raw/all-cycling-20210219.js').cycling.data;
const yoga = require('../meta/raw/all-yoga-20210219.js').yoga.data;
const strength = require('../meta/raw/all-strength-20210219.js').strength.data;
const bootcamp = require('../meta/raw/all-bootcamp-20210219.js').bootcamp.data;
const stretching = require('../meta/raw/all-stretching-20210219.js').stretching.data;

const RideModel = require('../models/ride');

const runHistoric = async () => {

	const disciplines = [cycling, yoga, strength, bootcamp, stretching];

	for (let j = 0; j < disciplines.length; j++) {

		const rides = disciplines[j];

		for (let i = 0; i < rides.length; i++) {
			console.log('read: ', rides[i])
			const result = await RideModel.findOneAndUpdate({_id:rides[i].id}, rides[i], {upsert: true, new: true});
			console.log(result)
			console.log('wrote:', rides[i].description, rides[i].title)
			console.log('\n\n')
		}
	}

	mongo.mongoose.connection.close();
}

runHistoric();