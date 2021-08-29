const cycling = require('./disciplines/cycling');
const stretching = require('./disciplines/stretching');
const yoga = require('./disciplines/yoga');
const strength = require('./disciplines/strength');
const bootcamp = require('./disciplines/bootcamp');
const walking = require('./disciplines/walking');

disciplines = [cycling, stretching, yoga, strength, bootcamp, walking];

const build = ({discipline, duration, instructors, classType, include = null, exclude = null, repeatsOK = false, random = false}) => {
	return {
		classType,
		duration,
		include,
 		exclude,
		discipline,
		instructors,
		repeatsOK,
		random
	};
}

for (let discipline of disciplines) {
	for (let combo of discipline) {
		console.log('******************************************')
		console.log({combo})
		const built = build(combo)
		console.log({built})
		exports[combo.name] = built;
	}
}


