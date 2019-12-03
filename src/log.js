/* istanbul ignore file */

// This is effectively a tiny wrapper around loglevel,
// which also pulls in environment
const log = require('loglevel');
log.setDefaultLevel('info');

if (process.env.LOGLEVEL) {
  log.setLevel(process.env.LOGLEVEL);
}

module.exports = log;
