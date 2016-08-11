'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campeonato_id = { type:Schema.Types.ObjectId, ref:'Campeonato'};
const grupo = { type: Number, required: true };
const equipe_id = { type:Schema.Types.ObjectId, ref:'Equipe'};
const jogos = { type: Number, required: true, default: 0 }; //numero de jogos jogados
const pontos = { type: Number, required: true, default: 0 }; //numero de pontos conquistados
const vitorias = { type: Number, required: true, default: 0 }; //numero de vitorias conquistadas
const empates = { type: Number, required: true, default: 0 }; //numero de empates conquistados
const derrotas = { type: Number, required: true, default: 0 }; //numero de derrotas conquistadas
const gols_favor  = { type: Number, required: true, default: 0 }; //numero gols feitos
const gols_contra = { type: Number, required: true, default: 0 }; //numero gols sofridos
const saldo_gols = { type: Number, required: true, default: 0 }; // saldo de gols


const _schema = {
	campeonato_id
	, grupo 
	, equipe_id
	, jogos
	, pontos
	, vitorias
	, empates
	, derrotas
	, gols_favor
	, gols_contra
	, saldo_gols
}

const classificacaoSchema = new Schema(_schema);

module.exports = classificacaoSchema;
