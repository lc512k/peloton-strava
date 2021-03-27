const express = require('express');
const mongo = require('./lib/mongo');
const main = require('./scripts/main.js');
const exphbs = require('express-handlebars');
const security = require('./middleware/security')
const ScheduleModel = require('./models/schedule');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.post('/save', async (req, res) => { 
	await mongo.client();
	try {
		const newSchedule = JSON.parse(req.body.schedule);		
		const result = await ScheduleModel.updateOne({_id:newSchedule._id}, newSchedule, {upsert: true, setDefaultsOnInsert: true});
		res.send(result)
	} catch(e) {
		res.send(e.toString())
	}
});

app.use(security)

app.set('view engine', '.html');
const handlebarsInstance = exphbs.create({
	extname: '.html',
	defaultLayout: 'main'
});
app.engine('html', handlebarsInstance.engine);

app.get('/schedule', async(req, res) => {
	await mongo.client();
	let schedule = await ScheduleModel.findOne({})
		.limit(1)
		.lean()
		.exec();

	let scheduleStr = JSON.stringify(schedule, Object.keys(schedule).sort(), 2);
	console.log({scheduleStr})
	res.render('schedule', {scheduleStr});
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