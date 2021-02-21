
const fetch = require('node-fetch');
module.exports = async () => {
const options = {
		method: 'POST',
		body: JSON.stringify({
			username_or_email: process.env.USERNAME,
			password: process.env.PASSWORD,
		})
	};
	console.log({url: process.env.LOGIN_URL, options})
	const response = await fetch(process.env.LOGIN_URL, options);
	console.log({response})
	return response.headers.get('set-cookie');
}

