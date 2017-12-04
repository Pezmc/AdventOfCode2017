const TestRunner = require('../testRunner');

const testCases = [
	{ input: 'aa bb cc dd ee', expected: 1 },
	{ input: 'aa bb cc dd aa', expected: 0 },
	{ input: 'aa bb cc dd aaa', expected: 1 },
];

const puzzleInput = require('fs').readFileSync('./input', 'utf8');

function solve(input) {
	const passwords = input.split("\n");

	let validPasswords = 0;
	for (let i = 0, len = passwords.length; i < len; i++) {
	  const passwordBits = passwords[i].split(" ").sort();
	  if (!passwordBits.some((bit, index) => passwordBits[index + 1] === bit)) {
	  	validPasswords++;
	  }
	}

	return validPasswords;
}

new TestRunner(testCases, puzzleInput, solve).run();
