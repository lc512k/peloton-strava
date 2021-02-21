const week = require('./user/schedule');
const moment = require('moment');
const mongo = require('./lib/mongo');
const WorkoutModel = require('./models/workout');
const RideModel = require('./models/ride');
const classTypes = require('./meta/class-types.js');
const instructorsHash = require('./meta/instructors-hash.js');
const fetch = require('node-fetch');
const FormData = require('form-data');

const NOW_TO_PAST = -1;
const PAST_TO_NOW = 1;
const FROM_DATE = 1514768461;
let tomorrow;

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

const buildStack = async () => {
	await mongo.client();

	let today = moment();
	tomorrow = moment().add(1,'days').format('dddd');


	const schedule = week[tomorrow];
	console.log({tomorrow, schedule})

	const response = [];

	for (let classTemplate of schedule) {
		const result = await RideModel.find({
			ride_type_id: {$in: getIds(classTemplate)},
			duration: classTemplate.duration,
			title: { $regex: classTemplate.titleSearchString || '', $options: "i" },
			original_air_time: {$gt: FROM_DATE}
		})
		.sort({original_air_time: NOW_TO_PAST})
		.limit(10000)
		.lean()
		.exec();

		console.log({hits: result.length});

		let counter = 5;

		for (unweightedRide of result) {
			let weight = 0;
			let weights = {}

			if (unweightedRide.title.toLowerCase().includes('rock')){
				weights.rock = -5;
			}
			if (unweightedRide.title.toLowerCase().includes('pop')){
				weights.pop = +1;
			}
			if (unweightedRide.title.toLowerCase().includes('HIIT')){
				weights.hiit = -5;
			}
			const name = instructorsHash[unweightedRide.instructor_id] ? instructorsHash[unweightedRide.instructor_id].name : 'NOT FOUND';
			if (classTemplate.preferredInstructors.includes(name)){
				const totalInstructors = classTemplate.preferredInstructors.length + 1;
				const instructorPosition = classTemplate.preferredInstructors.indexOf(name) + 1;
				const instructorWeight = totalInstructors - instructorPosition;
				const instructorWeightNormalized = instructorWeight*10/totalInstructors;

				weights.instructor = instructorWeightNormalized;
			}
			weights.recency = counter;
			weights.ease = 10 - (unweightedRide.difficulty_rating_avg || 10);
			unweightedRide.weights = weights;

			const workout = await WorkoutModel.find({ride_id:unweightedRide._id});
			const doneIt = workout.length > 0;
			
			if (doneIt) {
				weights.doneIt = -5;
			}
			if (unweightedRide.title.includes(classTemplate.titleExcludeString)) {
				weights.exludedString = -5;
			}
			if (unweightedRide.title.includes(classTemplate.titlePreferredString)) {
				weights.preferredString = 5;
			}
			for (const label in weights) {
				weight += weights[label];
			}
			unweightedRide.weight = weight;
			counter = counter/1.1;
		}

		result.sort(compare);
		console.log(result[0])
		response.push(result[0]);
		console.log('\n\n\n')
	
	}
	return response;
}

const stackClasses = async () => {
	await mongo.client();

	const stack = await buildStack();
	const graphqlresult = await saveStack(stack);
	result = {stack: stack.map(item => `${item.title} with ${instructorsHash[item.instructor_id].name}`), graphqlresult}

	console.log(tomorrow)
	console.log(result)

	mongo.mongoose.connection.close();
	return result;
}

module.exports = {stackClasses};