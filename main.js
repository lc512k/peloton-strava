const combos = require('./combos');
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

const week = {
	Monday: [],
	Tuesday: [],
	Wednesday: [],
	Thursday: [], 
	Friday: [],
	Saturday: [],
	Sunday: [
		combos.fullBodyStretch_10,
		combos.core_10,
		combos.warmUpRide_5,
		combos.ride_30,
		combos.coolDownRide_5,
		combos.postRideStretch_5,
		combos.focusFlowYoga_10
	]
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

const buildStack = async () => {

	await mongo.client();

	let today = moment();
	let tomorrow = moment().add(1,'days').format('dddd');

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
			// console.log('********** RIDE', unweightedRide.title)
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

				// console.log(instructorWeightNormalized, name)

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

			// console.log({weights})
			for (const label in weights) {
				// console.log({label})
				weight += weights[label];
			}
			unweightedRide.weight = weight;
			counter = counter/1.1;
		}

		// if I've bookmarked it and not done it
		// bookmarked and done
		// done

		result.sort(compare);
		console.log(result[0])
		response.push(result[0]);
		console.log('\n\n\n\n\n\n')
	
	}

	mongo.mongoose.connection.close();

	for (let i = 0; i < response.length; i++) {
		const ride = response[i];
		const joinToken = ride.join_tokens.on_demand;
		const respose = await fetch("https://gql-graphql-gateway.prod.k8s.onepeloton.co.uk/graphql", {
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
				"cookie": process.env.COOKIE//"__cfduid=df96a09b07f692abd1b45af7a79364b8b1613473101; peloton_session_id=cc4333a1c5b4479483d8ab43c3ccc8b5; driftt_aid=80d38684-fe47-4a72-91a0-dd0861709531; DFTT_END_USER_PREV_BOOTSTRAPPED=true; OptanonAlertBoxClosed=2021-02-16T10:58:46.530Z; ajs_anonymous_id=%22500800e9-2712-49a7-994b-4ab976e44972%22; optimizelyEndUserId=oeu1613473127788r0.2576391826782518; _ga=GA1.3.2035495864.1613473128; _gcl_au=1.1.610940956.1613473129; amplitude_idundefinedonepeloton.co.uk=eyJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOm51bGwsImxhc3RFdmVudFRpbWUiOm51bGwsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; _pin_unauth=dWlkPU5qTTNZemM0TlRJdE5UWm1aaTAwTmpVeExUZzNNREF0WmpSa1lXRTJaRGhsWldJeg; afUserId=3c54ee78-70b0-4b65-889f-a39c4d426a60-p; _gac_UA-34644111-13=1.1613473147.Cj0KCQiA962BBhCzARIsAIpWEL3z1rFBN8QoKyLkd4Rd-39a2OjaiXxCNYLgHkOhuvxVMjlGDSU5iD0aAoRdEALw_wcB; _gcl_aw=GCL.1613473147.Cj0KCQiA962BBhCzARIsAIpWEL3z1rFBN8QoKyLkd4Rd-39a2OjaiXxCNYLgHkOhuvxVMjlGDSU5iD0aAoRdEALw_wcB; _gcl_dc=GCL.1613473147.Cj0KCQiA962BBhCzARIsAIpWEL3z1rFBN8QoKyLkd4Rd-39a2OjaiXxCNYLgHkOhuvxVMjlGDSU5iD0aAoRdEALw_wcB; ab.storage.deviceId.57db7a4a-6f34-4ec9-9300-3bc6fe2e2a7a=%7B%22g%22%3A%22dea80e15-d008-f480-40ec-b89c02437925%22%2C%22c%22%3A1613473178348%2C%22l%22%3A1613473178348%7D; ajs_user_id=%222db5d527bb894467a9365e950fcb55d0%22; ab.storage.userId.57db7a4a-6f34-4ec9-9300-3bc6fe2e2a7a=%7B%22g%22%3A%222db5d527bb894467a9365e950fcb55d0%22%2C%22c%22%3A1613473189728%2C%22l%22%3A1613473189728%7D; OptanonConsent=isIABGlobal=false&datestamp=Tue+Feb+16+2021+20%3A38%3A53+GMT%2B0000+(Greenwich+Mean+Time)&version=6.7.0&hosts=&consentId=a58b92a1-2f1f-4ecf-a829-10d896345459&interactionCount=1&landingPath=NotLandingPage&groups=C0002%3A1%2CC0004%3A1%2CC0003%3A1%2CC0001%3A1&geolocation=GB%3BENG&AwaitingReconsent=false; _uetvid=f346dd10704511ebbb10d3bbc44e616f; amplitude_id_cd2366951f16a68ae86f5abd2e4d7c6fonepeloton.co.uk=eyJkZXZpY2VJZCI6IjEyMGQ0ODlmLTBlMTktNGEzMS1iYmVmLTEwYjdiZWY1OWEwNlIiLCJ1c2VySWQiOiIyZGI1ZDUyN2JiODk0NDY3YTkzNjVlOTUwZmNiNTVkMCIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYxMzUwNzkzNTA3MywibGFzdEV2ZW50VGltZSI6MTYxMzUwNzk0MDU3NiwiZXZlbnRJZCI6MjQsImlkZW50aWZ5SWQiOjIsInNlcXVlbmNlTnVtYmVyIjoyNn0=; amplitude_id_8fd62de9338689d5bc7c252265dad90eonepeloton.co.uk=eyJkZXZpY2VJZCI6IjI2MjhlMDMzLWYxZWItNGIyZi04MmJhLThlOTE2ZjljYjVlOVIiLCJ1c2VySWQiOiIyZGI1ZDUyN2JiODk0NDY3YTkzNjVlOTUwZmNiNTVkMCIsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTYxMzgzNjAyMTMzNiwibGFzdEV2ZW50VGltZSI6MTYxMzgzNjMyNzQyOCwiZXZlbnRJZCI6MTk1LCJpZGVudGlmeUlkIjo4OCwic2VxdWVuY2VOdW1iZXIiOjI4M30=; ab.storage.sessionId.57db7a4a-6f34-4ec9-9300-3bc6fe2e2a7a=%7B%22g%22%3A%22a0053336-2c4f-ffa4-442f-dd900c7aacc8%22%2C%22e%22%3A1613836357461%2C%22c%22%3A1613836313806%2C%22l%22%3A1613836327461%7D"
			},
			"referrer": "https://members.onepeloton.co.uk/",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": `{\"operationName\":\"AddClassToStack\",\"variables\":{\"input\":{\"pelotonClassId\":\"${joinToken}\"}},\"query\":\"mutation AddClassToStack($input: AddClassToStackInput!) {\\n  addClassToStack(input: $input) {\\n    numClasses\\n    totalTime\\n    userStack {\\n      stackedClassList {\\n        playOrder\\n        pelotonClass {\\n          ...ClassDetails\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment ClassDetails on PelotonClass {\\n  joinToken\\n  title\\n  classId\\n  fitnessDiscipline {\\n    slug\\n    __typename\\n  }\\n  assets {\\n    thumbnailImage {\\n      location\\n      __typename\\n    }\\n    __typename\\n  }\\n  duration\\n  ... on OnDemandInstructorClass {\\n    title\\n    fitnessDiscipline {\\n      slug\\n      displayName\\n      __typename\\n    }\\n    contentFormat\\n    difficultyLevel {\\n      slug\\n      displayName\\n      __typename\\n    }\\n    airTime\\n    instructor {\\n      name\\n      __typename\\n    }\\n    __typename\\n  }\\n  classTypes {\\n    name\\n    __typename\\n  }\\n  playableOnPlatform\\n  __typename\\n}\\n\"}`,
			"method": "POST",
			"mode": "cors"
		});
		console.log(ride.title, respose.status)
	}

	return response;
}

module.exports = {buildStack};