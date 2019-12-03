const log = require('../log');
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

const hardFuel = masses.reduce((accum, mass) => {
  return hardSolver(mass) + accum;
}, 0);
log.info(`Hard calculation: ${hardFuel}`);
