'use strict';	

const callback = require('./callback');
const isNumber = require('../quarks/quark-isNumber');
const error = require('../quarks/quark-errors-codes');
const isEmpty = require('../quarks/quark-isEmpty');

const retornaPosicaoEquipeEquipes = (idEquipe, equipes) => {
  let pos = -1;
  equipes.forEach((element, index) => {
    if(element.id == idEquipe){
      pos = index;
    }
  });
  return pos;
}


module.exports = (Model) => {
	return (res, idCamp, idEquipe) => {
		// busca campeonato...
		Model.findOne({"_id": idCamp},  (err,data) => {
			if (err) return callback(error.falhaBuscarCamp, '', res, 1, 1);

			if (isEmpty(data)){
				return callback(error.campeonatoUserinvalid, '', res, 1, 1);
			}

      const pos = retornaPosicaoEquipeEquipes(idEquipe,data.equipes);
      console.log(pos);
      if ( pos < 0 ) return callback(error.equipeNaoInscrita, '', res, 1, 1);

      data.equipes.splice(pos,1);
  
      Model.update({_id: idCamp},data,'', (err,data) => callback(err,data,res,0,0));
		});
	};
}


