// 'use strict';

const timeNulo = require('../quarks/quark-def-timeNulo');
const isImpar = require('../quarks/quark-isImpar');
const emparear = require('./action-emparear');
const emparearVolta = require('./action-emparear-volta');
const reposicionaTimes = require('./action-reposicionaTimes');

module.exports = (qtdeGrupos, classificacao, timesPorGrupo, idaVolta) => {

  const empareamentos = [];
  let empareamentosFinal = [];
  let ultimaRodadaPrimeiraFase = 0;
  for (let i = 1; i <= qtdeGrupos; i++) {
    // percorre classificacao em busca dos times do mesmo grupo.
    let times = [];
    classificacao.forEach((element) => {
      if (element.grupo === i) times.push(element.equipeId);
      return;
    });

    // se numero de equipes for impar cria uma equipe ficticia.
    // console.log(times);
    if (isImpar(timesPorGrupo)) {
      times.push(timeNulo);
    }
    let timesA = [];
    let timesB = [];
    for (let index = 0; index < (times.length / 2); index++) {
      timesA.push(times[index]);
      timesB.push(times[(times.length - 1) - index]);
    }
    // console.log('inicio a:' + timesA);
    // console.log('inicio b:' + timesB);
    // com array de times montado gerar os empareamentos.
    // console.log(times.length - 1);

    let index = 1;
    const numRodadas = isImpar(timesPorGrupo) ? (2 * timesPorGrupo) : ((2 * timesPorGrupo) - 2);
    console.log('numRodadas' + numRodadas);
    do {
      emparear(timesA, timesB, index, i).forEach((element) => {
        empareamentos.push(element);
      });

      times = reposicionaTimes(timesA, timesB);
      timesA = times.slice(0, timesA.length);
      timesB = times.slice(timesA.length, times.length);
      // console.log(timesA);
      // console.log(timesB);
      ultimaRodadaPrimeiraFase = index;
      index += 1;
    } while (empareamentos.length < numRodadas);

    // for (let index = 1; index < (times.length - 1); index++) {
    //   emparear(timesA, timesB, index, i).forEach((element) => {
    //     empareamentos.push(element);
    //   });

    //   times = reposicionaTimes(timesA, timesB);
    //   timesA = times.slice(0, timesA.length);
    //   timesB = times.slice(timesA.length, times.length);
    //   // console.log(timesA);
    //   // console.log(timesB);
    //   ultimaRodadaPrimeiraFase = index;
    // }
  }
  // montaJogosCasoIdaEVolta
  // console.log(empareamentos);
  empareamentosFinal = empareamentos.slice();
  if (idaVolta) {
    empareamentos.forEach(element => {
      empareamentosFinal.push(emparearVolta(ultimaRodadaPrimeiraFase, element));
    });
  }
  // console.log('empareamentos');
  // console.log(empareamentosFinal);
  return empareamentosFinal;
};
