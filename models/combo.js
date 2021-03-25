const mongoose = require('mongoose');

const comboSchema = new mongoose.Schema({
	_id: String,
	classType: [String],
	duration: Number,
	titleSearchStrings: [String],
	discipline: String,
	titlePreferredStrings: [String],
	titleExcludeStrings: [String],
	preferredInstructors: [Object],
	repeatsOK: Boolean,
	random: Boolean
});

module.exports = mongoose.model('Combo', comboSchema);