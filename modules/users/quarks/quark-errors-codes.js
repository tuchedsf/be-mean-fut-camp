'use strict';


const userOrPasswordIsEmpty		  =  {"status" : 401, "code" : 1001, "message" : 'Usuario e/ou password invalidos'};
const userNotFound				  		=  {"status" : 401, "code" : 1002, "message" : 'Usuario inexistente'};
const userFound				  		    =  {"status" : 401, "code" : 1003, "message" : 'Usuario ja cadastrado'};
const acessoExpirado						=  {"status" : 400, "code" : 1004, "message" : 'Acesso Expirado, faça login novamente'};
const erroLocalizarToken				=  {"status" : 500, "code" : 1005, "message" : 'Erro ao localizar usuario do token.'};
const tokenInvalido							=  {"status" : 401, "code" : 1006, "message" : 'Erro: Seu token é inválido'};
const tokenInvalNaoEncontrado		=  {"status" : 401, "code" : 1007, "message" : 'Token não encontrado ou informado'};


const ERROR = {
	 userOrPasswordIsEmpty
	 , userNotFound
	 , acessoExpirado
	 , erroLocalizarToken
	 , tokenInvalido
	 , tokenInvalNaoEncontrado,
  userFound
};

module.exports = ERROR;
