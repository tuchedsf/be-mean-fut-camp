'use strict';


const userOrPasswordIsEmpty		  =  {"status" : 401, "code" : 1001, "message" : 'Usuario e/ou password invalidos'};
const userNotFound				  		=  {"status" : 401, "code" : 1002, "message" : 'Usuario inexistente'};
const acessoExpirado						=  {"status" : 400, "code" : 1003, "message" : 'Acesso Expirado, faça login novamente'};
const erroLocalizarToken				=  {"status" : 500, "code" : 1004, "message" : 'Erro ao localizar usuario do token.'};
const tokenInvalido							=  {"status" : 401, "code" : 1005, "message" : 'Erro: Seu token é inválido'};
const tokenInvalNaoEncontrado		=  {"status" : 401, "code" : 1005, "message" : 'Token não encontrado ou informado'};


const ERROR = {
	 userOrPasswordIsEmpty
	 , userNotFound
	 , acessoExpirado
	 , erroLocalizarToken
	 , tokenInvalido
	 , tokenInvalNaoEncontrado
};

module.exports = ERROR;