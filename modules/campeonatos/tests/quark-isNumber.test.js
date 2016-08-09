'use strict';

const describes = [
	{type: true
		, message:"Numero Válido:"
		//, test: test
		, values: [1, 22,333, '1111'] 
	}
	, {type: false
		, message:"Numero inválido:"
	//	, test: test
		, values: [ undefined, null] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.is.js')('../quarks/quark-isNumber', describes);