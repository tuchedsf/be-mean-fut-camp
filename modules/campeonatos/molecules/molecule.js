// 'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const classificacaoSchema = require('../../classificacao/molecules/molecule');
const jogosSchema = require('../../jogos/molecules/molecule');
const equipesSchema = require('../../equipe/molecules/molecule');

const nome = { type: String, required: true };
const mata_mata = { type: Boolean, required: true, default: false };
const idaVolta = { type: Boolean, required: true, default: false };
const qtde_equipes = { type: Number, required: true, min: 2, max: 100 };
const qtde_grupos = { type: Number, required: true, min: 1, max: 25 };
const qtde_equipes_classificadas = { type: Number, required: true, min: 1 };
const qtde_equipes_rebaixadas = { type: Number, required: true};
const pontos_vitoria = { type: Number, required: true, min: 0, max: 10, default: 3 };
const pontos_empate = { type: Number, required: true, min: 0, max: 10, default: 1 };
const pontos_derrota = { type: Number, required: true, min: 0, max: 10, default: 0 };
const regulamento = { type: String, default: "Vitoria 3 pontos / Empate 1 ponto / Derrota 0 pontos" };
const organizadores = [ { type:Schema.Types.ObjectId, ref:'Usuarios'} ];
const criterios_desempate = [String]; //vitorias /saldo_gols
//const equipes = [{user_id: {type:Schema.Types.ObjectId, ref:'Usuarios'} , time: String}]
const equipes = [equipesSchema];
const classificacao = [classificacaoSchema];
const jogos = [jogosSchema];
const created_at = { type: Date, default: Date.now };

const _schema = {
		nome 
	, mata_mata
	, idaVolta
  	, qtde_equipes
	, qtde_grupos
	, qtde_equipes_classificadas
	, qtde_equipes_rebaixadas
	, pontos_vitoria
	, pontos_empate
	, pontos_derrota
	, regulamento
	, organizadores
	, criterios_desempate
	, equipes
	, classificacao
	, jogos 
	, created_at
}

const campeonatoSchema = new Schema(_schema);

module.exports = campeonatoSchema;
