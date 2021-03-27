const mongoose = require('mongoose');

const comboSchema = new mongoose.Schema({
	_id: String,
	classType: [String],
	duration: Number,
	titleIncludeStrings: [String],
	titleExcludeStrings: [String],
	discipline: String,
	preferredInstructors: Object,
	repeatsOK: Boolean,
	random: Boolean
});

module.exports = mongoose.model('Combo', comboSchema);