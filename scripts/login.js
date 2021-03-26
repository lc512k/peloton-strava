const fetch = require('node-fetch');
module.exports = async () => {
const options = {
		method: 'POST',
		body: JSON.stringify({
			username_or_email: process.env.USERNAME,
			password: process.env.PASSWORD,
		})
	};
	const response = await fetch(process.env.LOGIN_URL, options);
	console.log(`login: ${response.statusText}`)
	return response.headers.get('set-cookie');
}

