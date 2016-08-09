'use strict';

const mongoose = require('mongoose');

const campeonato_id = { type:Schema.Types.ObjectId, ref:'Campeonato'};
const rodada = { type: Number, required: true}; 
const mandante = { type: Number, required: true}; 
const visitante = { type: Number, required: true}; 
const placar_mandante = { type: Number, required: true, default: 0}; 
const placar_visitante = { type: Number, required: true, default: 0}; 
const auditoria_mandante = { identificador_equioe: mandante, placar_mandante: placar_mandante, placar_visitante: placar_visitante};
const auditoria_visitante = { identificador_equioe: visitante, placar_mandante: placar_mandante, placar_visitante: placar_visitante};


const _schema = {
	campeonato_id 
	, rodada
	, mandante
	, visitante
	, placar_mandante
	, placar_visitante
	, auditoria_mandante 
	, auditoria_visitante
}

const schemaName = new mongoose.Schema(_schema);

module.exports = schemaName;
}