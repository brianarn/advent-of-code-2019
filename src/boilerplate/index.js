const fs = require('fs');
const log = require('../log');

const easySolver = require('./easy-solver');
const hardSolver = require('./hard-solver');

const input = fs.readFileSync('input.txt', 'utf-8').trim();

const easyResult = easySolver(input);
log.info(`Easy result: ${easyResult}`);

/*
const hardResult = hardSolver(input);
log.info(`Hard result: ${hardResult}`);
*/
