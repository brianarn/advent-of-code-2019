const tap = require('tap');

const solver = require('../easy-solver');

tap.equal(solver(12), 2);
tap.equal(solver(14), 2);
tap.equal(solver(1969), 654);
tap.equal(solver(100756), 33583);
