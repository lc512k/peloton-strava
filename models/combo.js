const mongoose = require('mongoose');

const comboSchema = new mongoose.Schema({
	_id: String,
	classType: [String],
	duration: Number,
	include: [String],
	exclude: [String],
	discipline: String,
	instructors: Object,
	repeatsOK: Boolean,
	random: Boolean
});

module.exports = mongoose.model('Combo', comboSchema);