'use strict';

const CampeonatoSchema = require('../molecules/molecule');
const Campeonato = require('../../../modules/model')('Campeonato',CampeonatoSchema);

//actions
const create = require('../actions/action-create')(Campeonato);
const find = require('../actions/action-find')(Campeonato);
const findOne = require('../actions/action-findOne')(Campeonato);
const remove = require('../actions/action-remove')(Campeonato);
const update = require('../actions/action-update')(Campeonato);
const adicionarOrganizador = require('../actions/action-organizador-adicionar')(Campeonato);
const removerOrganizador = require('../actions/action-organizador-remover')(Campeonato);
const adicionarEquipe = require('../actions/action-equipes-adicionar')(Campeonato);
const removerEquipe = require('../actions/action-equipes-remover')(Campeonato);
const gerarTabelasClassif = require('../actions/action-gerar-tabelas')(Campeonato);
//const classificar = require('../actions/action-autenticarUsuario')(Campeonato);
//const gerarJogos = require('../actions/action-validarAutenticacao')(Campeonato);


const campeonatoMethods = {
	create
	, find
	, findOne
	, update
	, remove
	//, classificar
	//, gerarJogos
	, adicionarOrganizador
	, removerOrganizador
  , adicionarEquipe
	, removerEquipe
  , gerarTabelasClassif
};

module.exports = campeonatoMethods;
