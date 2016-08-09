'use strict';

module.exports = {
  validator: (value) => {
    return require('./quark-isEmptyString')(value);
  }
, message: 'O valor {VALUE} para o campo nome não pode ser vazio!'
};