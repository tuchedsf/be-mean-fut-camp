const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const grupo = { type: Number, required: true };
const equipeId = { type: Schema.Types.ObjectId, ref: 'Equipes' };
const jogos = { type: Number, required: true, default: 0 }; // numero de jogos jogados
const pontos = { type: Number, required: true, default: 0 }; // numero de pontos conquistados
const vitorias = { type: Number, required: true, default: 0 }; // numero de vitorias conquistadas
const empates = { type: Number, required: true, default: 0 }; // numero de empates conquistados
const derrotas = { type: Number, required: true, default: 0 }; // numero de derrotas conquistadas
const golsFavor = { type: Number, required: true, default: 0 }; // numero gols feitos
const golsContra = { type: Number, required: true, default: 0 }; // numero gols sofridos
const saldoGols = { type: Number, required: true, default: 0 }; // saldo de gols

const schema = {
  grupo,
  equipeId,
  jogos,
  pontos,
  vitorias,
  empates,
  derrotas,
  golsFavor,
  golsContra,
  saldoGols,
};

const classificacaoSchema = new Schema(schema);

module.exports = classificacaoSchema;
