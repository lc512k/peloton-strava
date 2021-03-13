const express = require('express');
const mongo = require('./lib/mongo');
const main = require('./scripts/main.js');
const exphbs = require('express-handlebars');

const app = express();
app.set('view engine', '.html');
const handlebarsInstance = exphbs.create({
	extname: '.html',
	defaultLayout: 'main'
});
app.engine('html', handlebarsInstance.engine);
app.use((req, res, next) => {
	if (req.query.apikey && req.query.apikey === process.env.APIKEY){
		next();
	}
	else {
		res.status(401).send('You need an API key - Eg, ?apikey=123...');
	}
})
app.get('/json', async (req, res) => res.json(await main.stackClasses()));
app.get('/preview', async (req, res) => {
	const stack = await main.stackClasses();
	res.render('preview', stack);
});



mongo.client()
	.then(() => {
		const PORT = process.env.PORT || 3000
		return app.listen(PORT, () => {
			console.log('listening on port', PORT);
		});
	})
	.catch(error => {
		console.log(error)
		throw new Error(error);
	});

module.exports = app;