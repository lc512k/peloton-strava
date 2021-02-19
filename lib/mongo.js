const mongoose = require('mongoose');

mongoose.Promise = Promise;

const client = () => {
	return mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/peloton-scratch', { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = { client, mongoose };