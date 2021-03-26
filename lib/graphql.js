const fetch = require('node-fetch');

module.exports = async (stack) => {
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