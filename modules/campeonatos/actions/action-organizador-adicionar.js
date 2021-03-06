'use strict';	

const callback = require('./callback');
const isNumber = require('../quarks/quark-isNumber');
const error = require('../quarks/quark-errors-codes');
const isEmpty = require('../quarks/quark-isEmpty');
const User = require('../../users/organisms/organism');
const UserSchema = User.user();

module.exports = (Model) => {
	return (res, idCamp, idUser) => {
		// busca campeonato...
		Model.findOne({"_id": idCamp},  (err,data) => {
			if (err) return callback(error.falhaBuscarCamp, '', res, 1, 1);

			if (isEmpty(data)){
				return callback(error.campeonatoUserinvalid, '', res, 1, 1);
			}

			const pos = data.organizadores.indexOf(idUser);
			if ( pos >= 0 ) return callback(error.usuarioJaEHOrganizador, '', res, 1, 1);
	
			UserSchema.findOne({"_id": idUser}, (err,dataUser) => {
        if (err) return callback(error.falhaBuscarUser, '', res, 1, 1);
      });

			data.organizadores.push(idUser);
			Model.update({_id: idCamp},data,'', (err,data) => callback(err,data,res,0,0));
    });
	};
}



