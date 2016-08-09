'use strict';

const describes = [
	{type: true
		, message:"String válidas:"
		//, test: test
		, values: ['diego', 'apenas um teste', '0000'] 
	}
	, {type: false
		, message:"String inválidos:"
	//	, test: test
		, values: [false, null, undefined, 2009] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.is.js')('../quarks/quark-isString', describes);