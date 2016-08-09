//pode ser mais atomizado...
'use strict';

const jwt = require('jwt-simple');
const segredo = require('../../../config/login-secret-token');
const callback = require('./callback');
const error = require('../quarks/quark-errors-codes');

module.exports = (Model) => {
  return (req, res, next) => {
    //recupera o token que veio na requisiçao
    const token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];

    if (token) { //se o token foi passado na requisiçao
      try {
        const decoded = jwt.decode(token, segredo); //realiza o doecode do token utilizando a chave de segredo.
        
        if (decoded.exp <= Date.now()) { //verifica se o token esta expirado.
          return callback(error.acessoExpirado, '', res, 0, 0);
        }
        //console.log(decoded.iss);
        //procura o usuario no banco e e verifica se eh o mesmo enviado no token.
        Model.findOne({"_id": decoded.iss }, function(err, user) {
          if(err) return callback(error.erroLocalizarToken, '', res, 0, 0);
          req.user = user;
          //console.log('achei usuario ' + req.user);
          return next();
        });
      //4
      } catch (err) {
        return callback(error.tokenInvalido, '', res, 0, 0);
      }
    } else {
      return callback(error.tokenInvalNaoEncontrado, '', res, 0, 0);
    }
  }
};