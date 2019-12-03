const log = require('../log');

function fuelCalc(mass) {
  log.debug(`fuelCalc: mass of ${mass}`);

  let fuelReq = Math.floor(mass / 3) - 2;

  log.debug(`fuelCalc: fuel required: ${fuelReq}`);

  if (fuelReq <= 0) {
    log.debug(`fuelCalc: end condition, required fuel of ${fuelReq} is non-positive`);
    return 0;
  }

  log.debug(`fuelCalc: calculating requirements for ${fuelReq} fuel`);
  fuelReq += fuelCalc(fuelReq);

  log.debug(`fuelCalc: final req: ${fuelReq}`);

  return fuelReq;
}

module.exports = function solver(input) {
  log.debug(`Input received: ${input}`);

  // Steps required:
  // - Determine fuel required for mass:
  // -- Divide input by 3
  // -- Round down
  // -- Subtract 2
  // - Given the fuel required, recursively determine the fuel for that fuel as
  //   mass, until such point that the fuel needs are non-positive
  return fuelCalc(input);
};
