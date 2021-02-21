// const express = require('express');
// const mongo = require('./lib/mongo');
// const main = require('./main');

// const app = express();
// app.get('/', async (req, res) => res.json(await main.stackClasses()));

// mongo.client()
// 	.then(() => {
// 		const PORT = process.env.PORT || 3000
// 		return app.listen(PORT, () => {
// 			console.log('listening on port', PORT);
// 		});
// 	})
// 	.catch(error => {
// 		console.log(error)
// 		throw new Error(error);
// 	});

// module.exports = app;