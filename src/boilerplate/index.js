const log = require('loglevel');
const fs = require('fs');

const easySolver = require('./easy-solver');
const hardSolver = require('./hard-solver');

if (process.env.LOGLEVEL) {
  log.setLevel(process.env.LOGLEVEL);
}

const input = fs.readFileSync('input.txt', 'utf-8').trim();

const easyResult = easySolver(input);
log.info(`Easy result: ${easyResult}`);

/*
const hardResult = hardSolver(input);
console.log(`Hard result: ${hardResult}`);
*/
