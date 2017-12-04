module.exports = class TestRunner {
	constructor(testCases, puzzleInput, solver) {
		this.testCases = testCases;
		this.puzzleInput = puzzleInput;
		this.solver = solver;
	}

	runTests() {
		this.testCases.forEach((testCase, i) => {
			const output = this.solver(testCase.input);
			if (output == testCase.expected) {
				console.log(`✓ Test case ${i} passed`);
			} else {
				console.error(`✗ Test case ${i} failed`);
				console.info(`Expected: "${testCase.expected}", actual: "${testCase.actual}"`);
			}
		});
	}

  solve() {
    console.log(`✌ The answer to the puzzle is: "${this.solver(this.puzzleInput)}"`);
  }

  run() {
    this.runTests();
    this.solve();
  }
}
