// 'use strict';

const callback = require('./callback');
const error = require('../quarks/quark-errors-codes');
const isEmpty = require('../quarks/quark-isEmpty');
const User = require('../../users/organisms/organism');

const UserSchema = User.user();

const EquipeSchema = require('../../equipe/molecules/molecule');
const Equipe = require('../../../modules/model')('Equipes',EquipeSchema);


const isEquipeJaInscritaCampeonato = (equipe, equipes) => {
 //percurre o array e verifica se há coincidencia ou não
  return equipes.every((item) => item.user_id === equipe.user_id || item.time === equipe.time);
 };

module.exports = (Model) => {
  return (res, idCamp, equipe) => {
    // busca campeonato...
    Model.findOne({ _id: idCamp }, (err, data) => {
      if (err) return callback(error.falhaBuscarCamp, '', res, 1, 1);

      if (isEmpty(data)){
        return callback(error.campeonatoUserinvalid, '', res, 1, 1);
      }

     // if ( isEquipeJaInscritaCampeonato(equipe, data.equipes) ) return callback(error.equipeJaInscrita, '', res, 1, 1);
     

    const equipeNova = new Equipe(equipe);

      data.equipes.push(equipeNova);
  
      Model.update({_id: idCamp},data,'', (err,data) => callback(err,data,res,0,0));
    });
  };
}


