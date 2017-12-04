const TestRunner = require('../testRunner');

const testCases = [
  { input: '1', expected: 0 },
  { input: '12', expected: 3 },
  { input: '23', expected: 2 },
  { input: '1024', expected: 31 },
];

const puzzleInput = require('fs').readFileSync('./input', 'utf8');

function solve(input) {
  //1, 9, 25, 49,
  const closestRoot = Math.ceil(Math.sqrt(input));
  const boxWidth =  closestRoot % 2 ? closestRoot : closestRoot + 1;

  bottomRight = Math.pow(boxWidth - 2, 2) + 1;
  topRight = bottomRight + boxWidth - 2;
  topLeft = topRight + boxWidth - 1;
  bottomLeft = topLeft + boxWidth - 1;

  let yPos;
  let xPos;
  if (input < topRight) {
    yPos = topRight - input;
    xPos = boxWidth - 1;
  } else if (input < topLeft) {
    yPos = 0;
    xPos = topLeft - input;
  } else if (input < bottomRight) {
    yPos = boxWidth - (bottomRight - input);
    xPos = 0;
  } else {
    yPos = boxWidth - 1;
    xPos = input - bottomLeft;
  }

  center = Math.floor(boxWidth / 2);

  diffX = Math.abs(xPos - center);
  diffY = Math.abs(yPos - center);

  return diffX + diffY;
}

new TestRunner(testCases, puzzleInput, solve).run();
