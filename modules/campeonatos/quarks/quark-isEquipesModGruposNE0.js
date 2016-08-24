'use strict';

const equipesModeGruposEQ0 = require('./quark-return-Mod');

module.exports = (qtdeEquipes, qtdeGrupos) => {
  if (equipesModeGruposEQ0(qtdeEquipes, qtdeGrupos) !== 0) {
    return true;
  }
  return false;
};
