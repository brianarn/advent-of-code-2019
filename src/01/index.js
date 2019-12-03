const log = require('loglevel');
const fs = require('fs');

const easySolver = require('./easy-solver');
const hardSolver = require('./hard-solver');

if (process.env.LOGLEVEL) {
  log.setLevel(process.env.LOGLEVEL);
}

const input = fs.readFileSync('./input.txt', 'utf-8').trim();
const masses = input.split('\n');

const easyFuel = masses.reduce((accum, mass) => {
  return easySolver(mass) + accum;
}, 0);
log.info(`Easy calculation: ${easyFuel}`);
console.log(easyFuel);

/*
const hardResult = hardSolver(input);
console.log(`Hard result: ${hardResult}`);
*/
