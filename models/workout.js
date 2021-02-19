const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
	_id: String,
	created_at: String,
	ride_id: String
});

module.exports = mongoose.model('Workout', workoutSchema);