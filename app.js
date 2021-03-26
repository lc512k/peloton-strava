const express = require('express');
const mongo = require('./lib/mongo');
const main = require('./scripts/main.js');
const exphbs = require('express-handlebars');
const security = require('./middleware/security')

const app = express();
app.use(security)

app.set('view engine', '.html');
const handlebarsInstance = exphbs.create({
	extname: '.html',
	defaultLayout: 'main'
});
app.engine('html', handlebarsInstance.engine);

app.get('/schedule', async(req, res) => {
	await mongo.client();
	const getSchedule = async () => {
		await mongo.client();
		let result = await ScheduleModel.find({})
		.limit(1)
		.lean()
		.exec();
	}
	res.render('schedule', schedule)
})

app.get('/preview', async (req, res) => { 
	const result = await main.stackClasses(req.query);
	res.render('preview', result);
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