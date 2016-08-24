// 'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rodada = { type: Number, required: true };
const grupo = { type: Number, required: true };
const mandante = { type: Schema.Types.ObjectId, ref: 'Equipes' };
const visitante = { type: Schema.Types.ObjectId, ref: 'Equipes' };
const placarMandante = { type: Number, required: true, default: 0 };
const placarVisitante = { type: Number, required: true, default: 0 };
const auditoriaMandante = { equipeId: mandante, placarMandante, placarVisitante };
const auditoriaVisitante = { equipeId: visitante, placarMandante, placarVisitante };
const valido = { type: Boolean, required: true, default: false };


const schema = {
  rodada,
  grupo,
  mandante,
  visitante,
  placarMandante,
  placarVisitante,
  auditoriaMandante,
  auditoriaVisitante,
  valido,
};

const jogosSchema = new Schema(schema);

module.exports = jogosSchema;
