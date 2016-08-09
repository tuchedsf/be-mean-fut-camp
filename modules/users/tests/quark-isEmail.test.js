'use strict';

const describes = [
	{type: true
		, message:"email válidos:"
		//, test: test
		, values: ['contato@bol.com.br','teste@gmail.com'] 
	}
	, {type: false
		, message:"email inválidos:"
	//	, test: test
		, values: ['','121@221.c','Letras',2009] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.is.js')('../quarks/quark-isEmail', describes);