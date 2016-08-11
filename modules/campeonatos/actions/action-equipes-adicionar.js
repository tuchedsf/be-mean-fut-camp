'use strict';	

const callback = require('./callback');
const isNumber = require('../quarks/quark-isNumber');
const error = require('../quarks/quark-errors-codes');
const isEmpty = require('../quarks/quark-isEmpty');
const User = require('../../users/organisms/organism');
const UserSchema = User.user();


const isEquipeJaInscritaCampeonato = (equipe, equipes) => {
 //percurre o array e verifica se há coincidencia ou não
  return equipes.every((item) => item.user_id == equipe.user_id || item.time == equipe.time);
 }

module.exports = (Model) => {
	return (res, idCamp, equipe) => {
		// busca campeonato...
		Model.findOne({"_id": idCamp},  (err,data) => {
			if (err) return callback(error.falhaBuscarCamp, '', res, 1, 1);

			if (isEmpty(data)){
				return callback(error.campeonatoUserinvalid, '', res, 1, 1);
			}

      if ( isEquipeJaInscritaCampeonato(equipe, data.equipes) ) return callback(error.equipeJaInscrita, '', res, 1, 1);

      data.equipes.push(equipe);
  
      Model.update({_id: idCamp},data,'', (err,data) => callback(err,data,res,0,0));
		});
	};
}


