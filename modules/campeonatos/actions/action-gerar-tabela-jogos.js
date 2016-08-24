'use strict';

const callback = require('./callback');
const error = require('../quarks/quark-errors-codes');
const isEmpty = require('../quarks/quark-isEmpty');
const montaEmpareamentos = require('./action-monta-empareamentos');

module.exports = (Model) => {
  return (res, idCamp) => {
		// busca campeonato...
    Model.findOne({ _id: idCamp }, (err, data) => {

      if (err) return callback(error.falhaBuscarCamp, '', res, 1, 1);
      if (isEmpty(data)) return callback(error.campeonatoUserinvalid, '', res, 1, 1);
      if (isEmpty(data.classificacao)) return callback(error.classificacaoNGerada, '', res, 1, 1);

      const timesPorGrupo = data.qtde_equipes / data.qtde_grupos;
      const empareamentos = montaEmpareamentos(data.qtde_grupos, data.classificacao, timesPorGrupo, data.idaVolta);

      console.log(empareamentos);
      empareamentos.forEach(element => {
        const auditoriaMandante = { equipeId: element.mandante };
        const auditoriaVisitante = { equipeId: element.visitante };
        const jogo = {
          rodada: element.rodada,
          grupo: element.grupo,
          mandante: element.mandante,
          visitante: element.visitante,
          auditoriaMandante,
          auditoriaVisitante };
        data.jogos.push(jogo);
      });
     console.log(data.jogos);
      Model.update({ _id: idCamp }, data, '', (err, data) => callback(err, data, res, 0, 0));
    });
  };
};
