'use strict';

module.exports = {
  validator: (value) => {
    return value > 0;
  }
, message: 'O valor {VALUE} para o campo deve ser maior que zero!'
};