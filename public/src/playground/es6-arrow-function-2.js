// arguments objects  - no longer bound with arrow functions

const add = (a, b) => {
	//console.log(arguments);
	return a + b;

};

console.log(add(55, 1, 1001));


// this keyword - no longer bound 

const user = {
	name: 'Mike',
	cities: ['New York', 'Charlotte', 'Atlanta'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
		}
	};



console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
	numbers: [1,2,3],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}

	};

	//numbers - array of numbers
	//multiplyBy - single number
	//multiply - return a new array where the number have been multiplied

console.log(multiplier.multiply());
