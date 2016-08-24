// 'use strict';

const callback = require('./callback');
const getEquipe = require('./action-getEquipe');

module.exports = (Model) => {
  return (res, id) => {
    Model.findOne({ _id: id }, { _id: 0, nome: 1, classificacao: 1, equipes: 1 }).sort({ grupo: 1 })
      .exec((err, data) => {
        const classifFormated = [];
        let estatisticas = [];
        let grupo = 1;
        data.classificacao.forEach((element) => {
          if (element.grupo !== grupo) {
            classifFormated.push({ grupo, estatisticas });
            estatisticas = [];
            grupo = element.grupo;
          }
          estatisticas.push({
            // grupo: element.grupo,
            time: getEquipe(element.equipeId, data.equipes),
            jogos: element.jogos,
            pontos: element.pontos,
            vitorias: element.vitorias,
            empates: element.empates,
            derrotas: element.derrotas,
            golsFavor: element.golsFavor,
            golsContra: element.golsContra,
            saldoGols: element.saldoGols,
          });
        });
        classifFormated.push({ grupo, estatisticas });
        const retorno = { nome: data.nome, classificacao: classifFormated };
        return callback(err, retorno, res, 0, 0);
      });
  };
};
