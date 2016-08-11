'use strict';

const callback = require('./callback');
const error = require('../quarks/quark-errors-codes');
const isEquipesModGruposNE0 = require('../quarks/quark-isEquipesModGruposNE0');
const isEmpty = require('../quarks/quark-isEmpty');

module.exports = (Model) => {
  return (res, idCamp) => {
		// busca campeonato...
    Model.findOne({ _id: idCamp }, (err, data) => {
      if (err) return callback(error.falhaBuscarCamp, '', res, 1, 1);

      if (isEmpty(data)) return callback(error.campeonatoUserinvalid, '', res, 1, 1);

      if (!isEmpty(data.classificacao)) return callback(error.classificacaoJaGerada, '', res, 1, 1);

      if (isEquipesModGruposNE0(data.qtde_equipes, data.qtde_grupos)) return callback(error.numeroEquipesNDivisivel, '', res, 1, 1);

      const qtdeEquipePorGrupo = data.qtde_equipes / data.qtde_grupos;

      if (data.qtde_grupos === 1) {
        data.equipes.forEach((element) => {
          data.classificacao.push({ campeonato_id: data.id, grupo: 1, equipe_id: element.id });
        });
      } else {
        let arrayEquipesSorteadas = [];
        for (let i = 1; i <= data.qtde_grupos; i++) {
          let indexEquipeSorteada = 0;
          for (let j = 1; j <= qtdeEquipePorGrupo; j++) {
            do {
              indexEquipeSorteada = Math.floor(Math.random() * data.qtde_equipes);
            } while (arrayEquipesSorteadas.indexOf(indexEquipeSorteada) >= 0);
            arrayEquipesSorteadas.push(indexEquipeSorteada);
            data.classificacao.push({ campeonato_id: data.id, grupo: i, equipe_id: data.equipes[indexEquipeSorteada].id });
          }
        }
      }
      Model.update({ _id: idCamp }, data, '', (err, data) => callback(err, data, res, 0, 0));
    });
  };
};



