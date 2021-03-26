
const classTypes = require('../meta/class-types.js');
module.exports = (classTemplate) => {
	const ids = [];
	for (typeILike of classTemplate.classType) {
		for (classType of classTypes) {
			if (classType.display_name === typeILike && classType.fitness_discipline === classTemplate.discipline){
				ids.push(classType.id);
			}
		}
	}
	if (ids.length === 0) {
		console.error('ERROR found nothing for', classTemplate)
	}
	return ids;
}