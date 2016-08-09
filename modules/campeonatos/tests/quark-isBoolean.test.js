'use strict';

const valueTRUE = [false, true];
const valueFALSE = '1';

const describes = [
	{type: true
		, message:"boleanos válidos:"
		//, test: test
		, values: [false, true] 
	}
	, {type: false
		, message:"boleanos inválidos:"
	//	, test: test
		, values: ['1', undefined, null, 0, new Date() ] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.is.js')('../quarks/quark-isBoolean', describes);