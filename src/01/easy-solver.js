const log = require('../log');

module.exports = function solver(input) {
  log.debug(`Input received: ${input}`);

  // Steps required:
  // - Divide input by 3
  // - Round down
  // - Subtract 2
  return Math.floor(input / 3) - 2;
};
