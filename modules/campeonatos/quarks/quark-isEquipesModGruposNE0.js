'use strict';

const equipesModeGruposEQ0 = require('./quark-return-Mod');

module.exports = (res, qtde_equipes, qtde_grupos) => {
      if (equipesModeGruposEQ0(qtde_equipes,  qtde_grupos) != 0 ){
        return true;
      }
      return false;
}