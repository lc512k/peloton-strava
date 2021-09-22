module.exports = (req, res, next) => {
		console.log(req.query)
	if (req.query.apikey && req.query.apikey === process.env.APIKEY){
		next();
	}
	else {
		res.status(401).send('You need an API key - Eg, ?apikey=123...');
	}
}