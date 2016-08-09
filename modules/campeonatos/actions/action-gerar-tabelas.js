'use strict';	

const callback = require('./callback');
const isNumber = require('../quarks/quark-isNumber');
const error = require('../quarks/quark-errors-codes');
const isEmpty = require('../quarks/quark-isEmpty');

const equipesModeGruposEQ0 = (qtde_equipes, qtde_grupos) => {
  return qtde_equipes % qtde_grupos;
}

const validateEquipesModGrupos = (res, qtde_equipes, qtde_grupos) => {
  const erro1         =  {"status" : 401, "code" : 2006, "message" : 'Numero de equipes não é divisivel pelo número de grupos'};
      if (equipesModeGruposEQ0(qtde_equipes,  qtde_grupos) != 0 ){
        return callback(erro1, '', res, 1, 1);
      }
}

const validateIsEmpty = (res, value) => {
  if (isEmpty(value)){
        return callback(error.campeonatoUserinvalid, '', res, 1, 1);
  }
}


module.exports = (Model) => {
	return (res, idCamp) => {
		// busca campeonato...
		Model.findOne({"_id": idCamp},  (err,data) => {
			if (err) return callback(error.falhaBuscarCamp, '', res, 1, 1);

      validateIsEmpty(res,data);

      validateEquipesModGrupos(res, data.qtde_equipes, data.qtde_grupos);

      const qtde_equipePorGrupo = data.qtde_equipes / data.qtde_grupos;

      if (data.qtde_grupos == 1) {
        data.equipes.forEach((element, index) => {
          data.classificacao.push({ campeonato_id: data.id, grupo: 1,  equipe_id: element.id});
        });
      }else {
        var arrayEquipesSorteadas = [ ];
        for (let i = 1; i <= data.qtde_grupos; i++) {
          let indexEquipeSorteada = 0;
          for (let j = 1; j <= qtde_equipePorGrupo; j++) {  
            do {
              indexEquipeSorteada =  Math.floor(Math.random() * data.qtde_equipes);
            } while (arrayEquipesSorteadas.indexOf(indexEquipeSorteada) >= 0);
            arrayEquipesSorteadas.push(indexEquipeSorteada);
            data.classificacao.push({ campeonato_id: data.id, grupo: i,  equipe_id: data.equipes[indexEquipeSorteada].id});
          }
        }
      }
			Model.update({_id: idCamp},data,'', (err,data) => callback(err,data,res,0,0));
    });
	};
}



