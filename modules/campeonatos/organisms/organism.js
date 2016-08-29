// 'use strict';

const CampeonatoSchema = require('../molecules/molecule');
const Campeonato = require('../../../modules/model')('Campeonato', CampeonatoSchema);

// actions
const create = require('../actions/action-create')(Campeonato);
const find = require('../actions/action-find')(Campeonato);
const findOne = require('../actions/action-findOne')(Campeonato);
const remove = require('../actions/action-remove')(Campeonato);
const update = require('../actions/action-update')(Campeonato);
const adicionarOrganizador = require('../actions/action-organizador-adicionar')(Campeonato);
const removerOrganizador = require('../actions/action-organizador-remover')(Campeonato);
const adicionarEquipe = require('../actions/action-equipes-adicionar')(Campeonato);
const removerEquipe = require('../actions/action-equipes-remover')(Campeonato);
const gerarClassificacao = require('../actions/action-gerar-classificacao')(Campeonato);
const gerarJogos = require('../actions/action-gerar-tabela-jogos')(Campeonato);
const classificacao = require('../actions/action-consulta-classificacao')(Campeonato);
const jogos = require('../actions/action-consulta-jogos')(Campeonato);
const atualizarPlacar = require('../actions/action-atualizar-placar')(Campeonato);

const campeonatoMethods = {
  create,
  find,
  findOne,
  update,
  remove,
  adicionarOrganizador,
  removerOrganizador,
  adicionarEquipe,
  removerEquipe,
  gerarClassificacao,
  gerarJogos,
  classificacao,
  jogos,
  atualizarPlacar,
  //atualizarClassificacao
};

module.exports = campeonatoMethods;
