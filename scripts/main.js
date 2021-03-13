const week = require('../user/schedule');
const login = require('./login');
const moment = require('moment');
const mongo = require('../lib/mongo');
const WorkoutModel = require('../models/workout');
const RideModel = require('../models/ride');
const classTypes = require('../meta/class-types.js');
const instructorsHash = require('../meta/instructors-hash.js');
const fetch = require('node-fetch');
const FormData = require('form-data');

const NOW_TO_PAST = -1;
const PAST_TO_NOW = 1;
const FROM_DATE = 1514768461;
let tomorrow;
let cookie;

const WEIGHT = {
	ROCK: process.env.ROCK || -5,
	HIIT: process.env.HIIT || -5,
	POP: process.env.POP || 1,
	INSTRUCTOR_MAX: process.env.INSTRUCTOR_MAX ||  2,
	EASE_MULTIPLIER: process.env.EASE_MULTIPLIER || 0.5,
	DONE_IT: process.env.DONE_IT || -2,
	HAS_EXCLUDED_STRING: process.env.HAS_EXCLUDED_STRING || -5,	
	HAS_PREFERRED_STRING: process.env.HAS_PREFERRED_STRING || 5,
}

function compare( a, b ) {
  if ( a.weight < b.weight ){
    return 1;
  }
  if ( a.weight > b.weight ){
    return -1;
  }
  return 0;
}

const getIds = (classTemplate) => {
	const ids = [];
	for (typeILike of classTemplate.classType) {
		for (classType of classTypes) {
			if (classType.display_name === typeILike && classType.fitness_discipline === classTemplate.discipline){
				ids.push(classType.id);
			}
		}
	}

	if (ids.length === 0) {
		console.error('ERROR found nothing for', classTemplate)
	}
	return ids;
}

const saveStack = async (stack) => {
	const graphqlResult = [];
	for (let i = 0; i < stack.length; i++) {
		const ride = stack[i];
		const joinToken = ride.join_tokens.on_demand;
		const response = await fetch("https://gql-graphql-gateway.prod.k8s.onepeloton.co.uk/graphql", {
			"headers": {
				"accept": "*/*",
				"accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
				"content-type": "application/json",
				"peloton-client-date": "2021-02-20T15:51:52.339Z",
				"peloton-client-details": "eyJQbGF0Zm9ybSBUeXBlIjoiV2ViIiwiRm9ybSBGYWN0b3IiOiJIYW5kc2V0IiwiU2NyZWVuIFNpemUiOiI1NjcgeCA3NjQiLCJCcm93c2VyIjoiQ2hyb21lIiwiQnJvd3NlciBWZXJzaW9uIjoiODguMC40MzI0LjE1MCIsIk9wZXJhdGluZyBTeXN0ZW0iOiJNYWMgT1MiLCJTb3VyY2UiOiJPbi1EZW1hbmQgTGlicmFyeSIsIkFkZCAgTWV0aG9kIjoiQ2xhc3MgRGV0YWlscyIsIk9TIFZlcnNpb24iOiIxMS4xLjAifQ==",
				"peloton-platform": "web",
				"sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
				"sec-ch-ua-mobile": "?0",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site",
				"cookie": process.env.COOKIE
			},
			"referrer": process.env.REFERRER,
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": `{\"operationName\":\"AddClassToStack\",\"variables\":{\"input\":{\"pelotonClassId\":\"${joinToken}\"}},\"query\":\"mutation AddClassToStack($input: AddClassToStackInput!) {\\n  addClassToStack(input: $input) {\\n    numClasses\\n    totalTime\\n    userStack {\\n      stackedClassList {\\n        playOrder\\n        pelotonClass {\\n          ...ClassDetails\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ClassDetails on PelotonClass {\\n  joinToken\\n  title\\n  classId\\n  fitnessDiscipline {\\n    slug\\n    __typename\\n  }\\n  assets {\\n    thumbnailImage {\\n      location\\n      __typename\\n    }\\n    __typename\\n  }\\n  duration\\n  ... on OnDemandInstructorClass {\\n    title\\n    fitnessDiscipline {\\n      slug\\n      displayName\\n      __typename\\n    }\\n    contentFormat\\n    difficultyLevel {\\n      slug\\n      displayName\\n      __typename\\n    }\\n    airTime\\n    instructor {\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  classTypes {\\n    name\\n    __typename\\n  }\\n  playableOnPlatform\\n  __typename\\n}\\n\"}`,
			"method": "POST",
			"mode": "cors"
		});
		console.log(ride.title, response.status)
		graphqlResult.push(ride.title)
	}
	return graphqlResult
}

const buildStack = async (queryDay, sendToBike) => {
	console.log({queryDay})
	await mongo.client();

	let today = moment();
	tomorrow = queryDay || process.env.TESTDAY || moment().add(1,'days').format('dddd');

	const schedule = week[tomorrow];
	console.log({tomorrow, schedule})

	const response = [];

	for (let classTemplate of schedule) {
		let result = await RideModel.find({
			ride_type_id: {$in: getIds(classTemplate)},
			duration: classTemplate.duration,
			language: 'english',
			title: { $regex: classTemplate.titleSearchString || '', $options: "i" },
			original_air_time: {$gt: FROM_DATE}
		})
		.sort({original_air_time: NOW_TO_PAST})
		.limit(10000)
		.lean()
		.exec();

		console.log({classType: classTemplate.classType, hits: result.length});

		let counter = 5;

		for (unweightedRide of result) {
			let weight = 0;
			let weights = {}

			if (unweightedRide.title.toLowerCase().includes('rock')){
				weights.rock = WEIGHT.ROCK;
			}
			if (unweightedRide.title.toLowerCase().includes('pop')){
				weights.pop = WEIGHT.ROCK;
			}
			if (unweightedRide.title.toLowerCase().includes('HIIT')){
				weights.hiit = WEIGHT.HIIT;
			}
			const name = instructorsHash[unweightedRide.instructor_id] ? instructorsHash[unweightedRide.instructor_id].name : 'NOT FOUND';
			if (Object.keys(classTemplate.preferredInstructors).includes(name)){
				weights.instructor = classTemplate.preferredInstructors[name]/WEIGHT.INSTRUCTOR_MAX;
			}
			else {
				weights.instructor = -WEIGHT.INSTRUCTOR_MAX
			}
			weights.recency = counter;
			weights.ease = WEIGHT.EASE_MULTIPLIER*(10 - (unweightedRide.difficulty_rating_avg || 10));
			unweightedRide.weights = weights;

			const workout = await WorkoutModel.find({ride_id:unweightedRide._id});
			const doneIt = workout.length > 0;

			if (doneIt) {
				weights.doneIt = WEIGHT.DONE_IT;
				console.log('DONE IT', classTemplate)
				if (classTemplate.preferences.repeatsOK) {
					weights.doneIt *= -1;
				}
				console.log({weights})
			}
			if (unweightedRide.title.includes(classTemplate.titleExcludeString)) {
				weights.exludedString = WEIGHT.HAS_EXCLUDED_STRING;
			}
			if (unweightedRide.title.includes(classTemplate.titlePreferredString)) {
				weights.preferredString = WEIGHT.HAS_PREFERRED_STRING;
			}
			for (const label in weights) {
				weight += weights[label];
			}
			unweightedRide.weight = weight;
			counter = counter/1.1;
		}

		result.sort(compare);
		console.log(result.map(({weights, weight, title, instructor_id}) => ({weights, weight, title, instructor: instructorsHash[instructor_id]?instructorsHash[instructor_id].name:'NONAME'})).slice(0,5))
		let selected = result[0];

		if (classTemplate.preferences.random) {
			console.log('RANDOM OK for ', classTemplate.classType)
			const randomPos = Math.floor(Math.random() * 5) + 1 ;
			console.log({randomPos})
			selected = result[randomPos]
		}

		response.push(selected);
		console.log('\n')
	
	}
	return response;
}

const stackClasses = async (query) => {
	await mongo.client();
	cookie = await login();

	const stack = await buildStack(query ? query.day : undefined);
	let graphqlresult;

	if (process.env.SEND_TO_BIKE || query.sendToBike) {
		graphqlresult = await saveStack(stack);
	}
	result = {stack, graphqlresult}

	console.log(tomorrow)
	console.log({result})

	mongo.mongoose.connection.close();
	return result;
}
 
module.exports = {stackClasses};
