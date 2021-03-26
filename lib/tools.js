module.exports = (a, b) => {
	if ( a.weight < b.weight ) return 1;
	if ( a.weight > b.weight ) return -1;
	return 0;
}
