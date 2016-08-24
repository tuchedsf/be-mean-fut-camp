// 'use strict';

module.exports = (ultimaRodadaPrimeiraFase, empareamento) => {
  const empareamentoVolta = { mandante: empareamento.visitante,
    visitante: empareamento.mandante,
    rodada: (empareamento.rodada + ultimaRodadaPrimeiraFase),
    grupo: empareamento.grupo };
  return empareamentoVolta;
};
