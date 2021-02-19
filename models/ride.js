const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
	_id: String,
	description: String,
	instructor_id: String,
	duration: Number,
	fitness_discipline: String,
	scheduled_start_time: Number,
	title: String,
	is_favorite: Boolean,
	difficulty_level: String,
	language: String,
	length: Number,
	difficulty_estimate: Number,
	difficulty_rating_avg: Number,
	difficulty_rating_count: Number,
	overall_rating_avg: Number,
	overall_rating_count: Number,
	overall_estimate: Number,
	image_url: String,
	original_air_time: Number,
	rating: Number,
	ride_type_id: String
});

module.exports = mongoose.model('Ride', rideSchema);