const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userId = { type: Schema.Types.ObjectId, ref: 'Usuarios' };
const time = { type: String, required: true };

const schema = {
  userId,
  time,
};

const equipeSchema = new Schema(schema);

module.exports = equipeSchema;
