// 'use strict';

const callback = require('./callback');
const error = require('../quarks/quark-errors-codes');
const isEmpty = require('../quarks/quark-isEmpty');
const EquipeSchema = require('../../equipe/molecules/molecule');
const Equipe = require('../../../modules/model')('Equipes', EquipeSchema);


const isEquipeJaInscritaCampeonato = (equipe, equipes) => {
 // percurre o array e verifica se há coincidencia ou não
  if (equipes.length) {
    const userIdEq = equipes.every(item => item.user_id === equipe.user_id);
    const timeEq = equipes.every(item => item.time === equipe.time);
    if (userIdEq && timeEq) return true;
  }
  return false;
};

module.exports = (Model) => {
  return (res, idCamp, equipe) => {
    // busca campeonato...
    Model.findOne({ _id: idCamp }, (err, data) => {
      if (err) return callback(error.falhaBuscarCamp, '', res, 1, 1);

      if (isEmpty(data)) {
        return callback(error.campeonatoUserinvalid, '', res, 1, 1);
      }

      if (isEquipeJaInscritaCampeonato(equipe, data.equipes)) return callback(error.equipeJaInscrita, '', res, 1, 1);

      const equipeNova = new Equipe(equipe);

      data.equipes.push(equipeNova);

      Model.update({ _id: idCamp }, data, '', (erro, success) => callback(erro, success, res, 0, 0));
    });
  };
};
