const tap = require('tap');
const log = require('loglevel');

const solver = require('../hard-solver');

tap.equal(solver(14), 2);
tap.equal(solver(1969), 966);
tap.equal(solver(100756), 50346);
