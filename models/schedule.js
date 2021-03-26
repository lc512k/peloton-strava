const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
	_id: String,
	Monday: [String],
	Tuesday: [String],
	Wednesday: [String],
	Thursday: [String],
	Friday: [String],
	Saturday: [String],
	Sunday: [String]
});

module.exports = mongoose.model('Schedule', scheduleSchema);