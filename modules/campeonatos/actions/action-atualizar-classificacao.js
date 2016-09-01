'use strict';

const callback = require('./callback');
const indexEquipeClassificacao = require('../quarks/quark-return-indexEquipeNaClassificacao');

module.exports = (Model, campeonato, jogo, res) => {
  // recupera equipe na classificacao
  const indexMandante = campeonato.classificacao.findIndex(indexEquipeClassificacao(jogo.mandante));
  const indexVisitante = campeonato.classificacao.findIndex(indexEquipeClassificacao(jogo.visitante));
 // console.log(indexMandante);
  // console.log(campeonato.classificacao[indexMandante]);

  // atualiza classificacao de acordo resultado jogo.
  if (jogo.placarMandante > jogo.placarVisitante) {
    campeonato.classificacao[indexMandante].jogos = campeonato.classificacao[indexMandante].jogos + 1;
    campeonato.classificacao[indexMandante].pontos = campeonato.classificacao[indexMandante].pontos + campeonato.pontos_vitoria;
    campeonato.classificacao[indexMandante].vitorias = campeonato.classificacao[indexMandante].vitorias + 1;
    campeonato.classificacao[indexMandante].golsFavor = campeonato.classificacao[indexMandante].golsFavor + jogo.placarMandante;
    campeonato.classificacao[indexMandante].golsContra = campeonato.classificacao[indexMandante].golsContra + jogo.placarVisitante;
    campeonato.classificacao[indexMandante].saldoGols =
          campeonato.classificacao[indexMandante].golsFavor - campeonato.classificacao[indexMandante].golsContra;

    campeonato.classificacao[indexVisitante].jogos = campeonato.classificacao[indexVisitante].jogos + 1;
    campeonato.classificacao[indexVisitante].pontos = campeonato.classificacao[indexVisitante].pontos + campeonato.pontos_derrota;
    campeonato.classificacao[indexVisitante].derrotas = campeonato.classificacao[indexVisitante].derrotas + 1;
    campeonato.classificacao[indexVisitante].golsFavor = campeonato.classificacao[indexVisitante].golsFavor + jogo.placarVisitante;
    campeonato.classificacao[indexVisitante].golsContra = campeonato.classificacao[indexVisitante].golsContra + jogo.placarMandante;
    campeonato.classificacao[indexVisitante].saldoGols =
          campeonato.classificacao[indexVisitante].golsFavor - campeonato.classificacao[indexVisitante].golsContra;
  } else if (jogo.placarMandante < jogo.placarVisitante) {
    campeonato.classificacao[indexVisitante].jogos = campeonato.classificacao[indexVisitante].jogos + 1;
    campeonato.classificacao[indexVisitante].pontos = campeonato.classificacao[indexVisitante].pontos + campeonato.pontos_vitoria;
    campeonato.classificacao[indexVisitante].vitorias = campeonato.classificacao[indexVisitante].vitorias + 1;
    campeonato.classificacao[indexVisitante].golsFavor = campeonato.classificacao[indexVisitante].golsFavor + jogo.placarVisitante;
    campeonato.classificacao[indexVisitante].golsContra = campeonato.classificacao[indexVisitante].golsContra + jogo.placarMandante;
    campeonato.classificacao[indexVisitante].saldoGols =
          campeonato.classificacao[indexVisitante].golsFavor - campeonato.classificacao[indexVisitante].golsContra;


    campeonato.classificacao[indexMandante].jogos = campeonato.classificacao[indexMandante].jogos + 1;
    campeonato.classificacao[indexMandante].pontos = campeonato.classificacao[indexMandante].pontos + campeonato.pontos_derrota;
    campeonato.classificacao[indexMandante].derrotas = campeonato.classificacao[indexMandante].derrotas + 1;
    campeonato.classificacao[indexMandante].golsFavor = campeonato.classificacao[indexMandante].golsFavor + jogo.placarMandante;
    campeonato.classificacao[indexMandante].golsContra = campeonato.classificacao[indexMandante].golsContra + jogo.placarVisitante;
    campeonato.classificacao[indexMandante].saldoGols =
          campeonato.classificacao[indexMandante].golsFavor - campeonato.classificacao[indexMandante].golsContra;
  } else {
    campeonato.classificacao[indexVisitante].jogos = campeonato.classificacao[indexVisitante].jogos + 1;
    campeonato.classificacao[indexVisitante].pontos = campeonato.classificacao[indexVisitante].pontos + campeonato.pontos_empate;
    campeonato.classificacao[indexVisitante].empates = campeonato.classificacao[indexVisitante].empates + 1;
    campeonato.classificacao[indexVisitante].golsFavor = campeonato.classificacao[indexVisitante].golsFavor + jogo.placarVisitante;
    campeonato.classificacao[indexVisitante].golsContra = campeonato.classificacao[indexVisitante].golsContra + jogo.placarMandante;

    campeonato.classificacao[indexMandante].jogos = campeonato.classificacao[indexMandante].jogos + 1;
    campeonato.classificacao[indexMandante].pontos = campeonato.classificacao[indexMandante].pontos + campeonato.pontos_empate;
    campeonato.classificacao[indexMandante].empates = campeonato.classificacao[indexMandante].empates + 1;
    campeonato.classificacao[indexMandante].golsFavor = campeonato.classificacao[indexMandante].golsFavor + jogo.placarMandante;
    campeonato.classificacao[indexMandante].golsContra = campeonato.classificacao[indexMandante].golsContra + jogo.placarVisitante; }

  // console.log(campeonato.classificacao[indexMandante]);
  // console.log(campeonato.classificacao[indexVisitante]);

  Model.update({ _id: campeonato.id }, campeonato, '', (err, data) => callback(err, data, res, 0, 0));
};
