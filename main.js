// js project

// string manipulation Functions.

// reverse a string
function revString(str) {
	return Array.from(str).reverse().join(" ");
}

console.log(revString("String to be reversed"));

// count characters
const stringCount = "This string is to be counted";
function charaCount(Str) {
	return Str.length;
}

console.log(charaCount(stringCount));

// capitalize words

function tocaps(str) {
	let words = str.split(" ");
	for (let i = 0; i < words.length; i++) {
		var firstLetter = words[i][0].toUpperCase() + words[i].slice(1);
		words[i] = firstLetter;
		console.log(firstLetter);
	}
	let newWords = words.join(" ");
	return newWords;

	// if (typeof str === "string") {
	// 	console.log((str[0] = str[0].toUpperCase()));
	// 	console.log();
	// } else {
	// 	console.log("Enter a string");
	// }
}

console.log(tocaps("this is the string to capitalise"));

// Array functions

// max-min

function maxMin(arrX) {
	let max = -Infinity;
	let min = Infinity;

	for (i = 0; i < noms.length; i++) {
		if (noms[i] > max) {
			max = noms[i];
			console.log(`${noms[i]} is the maximum number in the array ${noms}`);
		}
		if (noms[i] < min) {
			min = noms[i];
			console.log(`${noms[i]} is the minimum number in the array ${noms}`);
		}
	}

	return { max, min };
}
const noms = [30, 60, 0, 98, 111, 3];

console.log(maxMin(noms));

// sum of array
function addArrai(numadd) {
	let sumA = 0;

	for (i = 0; i < numadd.length; i++) {
		sumA += numadd[i];
	}
	return sumA;
}

const numadd = [100, 200, 5000, 27];
console.log(`The sum of ${numadd} in the array is `, addArrai(numadd));

// filter array

// functions to filter out US states

const USState = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Montana",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"New Jersey",
	"New Mexico",
	"New York",
	"North Carolina",
	"North Dakota",
	"Ohio",
	"Oklahoma",
	"Oregon",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming",
];
console.log(USState);

const isUSState = (usCon) => USState.includes(usCon);

function continentState(statesCon) {
	let filteredaRrai = [];

	for (let i = 0; i < statesCon.length; i++) {
		if (isUSState(statesCon[i])) {
			filteredaRrai.push(statesCon[i]);
		}
	}
	return filteredaRrai;
}

const statesCon = [
	"California",
	"Asia",
	"Texas",
	"Europe",
	"Florida",
	"Africa",
	"New York",
	"Australia",
	"Illinois",
	"South America",
];

const statesOnly = continentState(statesCon, isUSState);
console.log(statesOnly);

// Mathematical Functions

// factorial
function factorial(n) {
	if ((n == 0, n == 1));
	{
		console.log(1);
	}
	let prodt = 1;

	for (let i = 2; i <= n; i++) {
		prodt *= i;
	}
	return prodt;
}

console.log(factorial(6));

// Prime Number Check

function isPrime(num) {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return num > 1;
}

function primeNumbers(n) {
	for (let i = 2; i <= n; i++) {
		if (isPrime(i)) {
			console.log(i);
		}
	}
}

primeNumbers(10);

function no(w, q) {
	if (w % q === 0) {
		console.log("is perfecly divisble");
	} else {
		console.log("is not perfectly divisble");
	}
}

no(10, 3);

// Fibonacci Sequence

function fibonacci(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;

	let a = 0,
		b = 1,
		temp;
	for (let i = 2; i <= n; i++) {
		temp = a + b;
		a = b;
		b = temp;
	}
	return b;
}

// Example usage
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));
