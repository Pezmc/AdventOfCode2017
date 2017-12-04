const TestRunner = require('../testRunner');

const testCases = [
	{ input: 'abcde fghij', expected: 1 },
	{ input: 'abcde xyz ecdab', expected: 0 },
	{ input: 'a ab abc abd abf abj', expected: 1 },
	{ input: 'iiii oiii ooii oooi oooo', expected: 1 },
	{ input: 'oiii ioii iioi iiio', expected: 0 },
];

const puzzleInput = require('fs').readFileSync('./input', 'utf8');

function solve(input) {
	const passwords = input.split("\n");

	let validPasswords = 0;
	for (let i = 0, len = passwords.length; i < len; i++) {
	  const passwordBits = passwords[i]
      .split(" ")
      .map(bit => bit.split("").sort().join(""))
      .sort();

	  if(!passwordBits.some((bit, index) => passwordBits[index + 1] === bit)) {
	  	validPasswords++;
	  }
	}

	return validPasswords;
}

new TestRunner(testCases, puzzleInput, solve).run();
