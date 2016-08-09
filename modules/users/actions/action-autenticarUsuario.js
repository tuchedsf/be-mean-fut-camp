//pode ser mais atomizado...
'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const callback = require('./callback');
const segredo = require('../../../config/login-secret-token');
const error = require('../quarks/quark-errors-codes');

module.exports = (Model) => {
	return (res, userParams) => {
    console.log(userParams);
		//valida se o usuario foi preenchido na requisicao
		if (userParams.email == '' || userParams.password == '' || userParams.password == ' ') {
			return callback(error.userOrPasswordIsEmpty, '', res, 0, 0);
    	}
  //Realiza busca usuario no banco
  Model.findOne({email: userParams.email}, function (err, user) {
    if (err || user == null) {
      return callback(error.userNotFound, '', res, 0, 0); //caso nao encontre usuario correspondente ao informado
    }

    //chama method de verificar senha informada é igual a salva no banco.
    user.verificaSenha(userParams.password, function(isMatch) {
      if (!isMatch) {
        console.log('dentro verifica senha');
       return callback(error.userOrPasswordIsEmpty,'', res, 0,0); //se a senha for diferente gera excecao...
      }
    //3
    const expires = moment().add(1,'days').valueOf(); //atribui a expires uma data de expiraçao (moment pega a hora e momento atual e adiciona 1 dia)
    
    //gera o token com as credenciais do login.
    const token = jwt.encode({
      iss: user.id,
      exp: expires
    }, segredo);
    
    //devolve o token para a requisiçao.
     return callback('',{
      token : token,
      expires: expires,
      user: user.toJSON()
      }, res, 0,0);
      }); 
    });
	};
	};