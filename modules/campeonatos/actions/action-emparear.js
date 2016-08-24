'use strict';

const timeNulo = require('../quarks/quark-def-timeNulo');
const isImpar = require('../quarks/quark-isImpar');

/*
Para determinar mandos de campo de forma paritária, algumas inversões devem ser operadas nas colunas
DEPOIS de feitos os empareamentos de todas as rodadas:
basta inverter SEMPRE a ordem dos competidores das colunas pares;
e inverter a ordem da primeira coluna apenas nas rodadas pares.

como é enviado qual rodada ao montar os jogos a troca esta sendo realizada no
monento do empareamento
*/


module.exports = (timesA, timesB, rodada, grupo) => {
  let n = 0;
  const empareamentos = [];
  do {
    if (timesA[n] !== timeNulo && timesB[n] !== timeNulo) {
      if ((n === 0 && !isImpar(rodada)) || (n > 0 && isImpar(n))) {
        empareamentos.push({ mandante: timesB[n], visitante: timesA[n], rodada, grupo });
      } else {
        empareamentos.push({ mandante: timesA[n], visitante: timesB[n], rodada, grupo });
      }
    }
    n++;
  } while (n < timesA.length);
  return empareamentos;
};
