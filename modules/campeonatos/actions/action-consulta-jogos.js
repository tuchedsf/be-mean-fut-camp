// 'use strict';

const callback = require('./callback');
const getEquipe = require('./action-getEquipe');

module.exports = (Model) => {
  return (res, id) => {
    Model.findOne({ _id: id }, { _id: 0, nome: 1, jogos: 1, equipes: 1 }).sort({ grupo: 1 })
      .exec((err, data) => {
        const JogosFormated = [];
        data.jogos.forEach((element) => {
          JogosFormated.push({
            rodada: element.rodada,
            grupo: element.grupo,
            mandante: getEquipe(element.mandante, data.equipes),
            visitante: getEquipe(element.visitante, data.equipes),
            placarMandante: element.placarMandante,
            placarVisitante: element.placarVisitante,
            valido: element.valido,
          });
        });
        const retorno = { nome: data.nome, jogos: JogosFormated };
        return callback(err, retorno, res, 0, 0);
      });
  };
};
