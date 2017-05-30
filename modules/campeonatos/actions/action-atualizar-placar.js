'use strict';

const callback = require('./callback');
const error = require('../quarks/quark-errors-codes');
const isJogoValido = require('../quarks/quark-return-indexJogo');
const isUserOrganizador = require('../quarks/quark-isUserOrganizador');
const isMandanteOrVisitante = require('../quarks/quark-isMandanteOrVisitante');
const actionAtualizaClassificacao = require('./action-atualizar-classificacao');

module.exports = (Model) => {
  return (res, idCamp, idJogo, idUser, placarMandante, placarVisitante) => {
    let indexJogo = -1;
    Model.findOne({ _id: idCamp }).sort({ grupo: 1 })
      .exec((err, data) => {
      //  console.log(placarMandante);
       // console.log(placarVisitante);
        // valida se jogo é do campeonato e é valido.
        indexJogo = data.jogos.findIndex(isJogoValido(idJogo));
        if (indexJogo < 0) return callback(error.jogoInvalido, '', res, 1, 1);

        // valida se usuario é organizador, se for pode atualizar a partida.
        const isOrganizador = isUserOrganizador(idUser, data.organizadores);

        if (isOrganizador) {
           // se usuario organizador atualiza o resultado e o flag nao precisando de auditoria.
          data.jogos[indexJogo].valido = true;
          data.jogos[indexJogo].placarVisitante = placarVisitante;
          data.jogos[indexJogo].placarMandante = placarMandante;
        } else {
          if (data.jogos[indexJogo].valido) {
            return callback(error.jogoValidado, '', res, 1, 1);
            // console.log('erro jogo ja foi validado não é possível editar o placar do jogo');
          }
           // se nao for organizador valida se o usuario é o responsável pelo time mandante/visitante do jogo
          const isMandante = isMandanteOrVisitante(data.jogos[indexJogo].mandante, idUser, data.equipes);
          const isVisitante = isMandanteOrVisitante(data.jogos[indexJogo].visitante, idUser, data.equipes);

          if (!isMandante && !isVisitante) {
            return callback(error.timeNMandanteVisist, '', res, 1, 1);
            // console.log('Operação inválida!!time do usuario nao é mandante/visitante da partida');
          }
        // se usuario for mandante atualiza auditoria mandante e verifica se auditoria visitante esta preenchida, se não
        // apenas atualiza auditoria e pronto . Se sim realiza batimento do placar auditoria mandante e auditoria visitante
        // se tiverem iguais atualiza o resultado oficial e marca flag como valido se não apenas atualiza a auditoria
        // e o organizador deverá informar qual o placar real do jogo.
        // mesma logica caso o seja visitante.
          if (isMandante) {
            data.jogos[indexJogo].auditoriaMandante.placarVisitante = placarVisitante;
            data.jogos[indexJogo].auditoriaMandante.placarMandante = placarMandante;
            data.jogos[indexJogo].auditoriaMandante.update_at = Date.now();
          } 
          
          if (isVisitante){
            data.jogos[indexJogo].auditoriaVisitante.placarVisitante = placarVisitante;
            data.jogos[indexJogo].auditoriaVisitante.placarMandante = placarMandante;
            data.jogos[indexJogo].auditoriaVisitante.update_at = Date.now();
          }

            // inserir verificacao se placar de visitante ou mandante ja estiver preenchido
      // bater se foram iguais. se sim ja atualiza placar oficial
      // automaticamente sem precisar do organizador atualizar o placar.

          if (data.jogos[indexJogo].auditoriaMandante.update_at !== null &&
            data.jogos[indexJogo].auditoriaMandante.update_at !== undefined &&
            data.jogos[indexJogo].auditoriaVisitante.update_at !== null &&
            data.jogos[indexJogo].auditoriaVisitante.update_at !== undefined &&
            data.jogos[indexJogo].auditoriaMandante.placarVisitante ===
            data.jogos[indexJogo].auditoriaVisitante.placarVisitante &&
            data.jogos[indexJogo].auditoriaMandante.placarMandante ===
            data.jogos[indexJogo].auditoriaVisitante.placarMandante) {
            data.jogos[indexJogo].valido = true;
            data.jogos[indexJogo].placarVisitante = placarVisitante;
            data.jogos[indexJogo].placarMandante = placarMandante;
          }
        }

        // atualiza o jogo///
        Model.update({ _id: idCamp }, data, '', (erro, success) => {
          if (erro) return callback(erro, success, res, 0, 0);
          // se atualizou o jogo oficialmente. chama rotina de atualizar classificacao
          if (data.jogos[indexJogo].valido) {
            actionAtualizaClassificacao(Model, data, data.jogos[indexJogo], res);
          } else {
            return callback(erro, success, res, 0, 0);
          }
        });
      });
  };
};
