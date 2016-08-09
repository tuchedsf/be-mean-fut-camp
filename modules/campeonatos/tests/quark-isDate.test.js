'use strict';

const valueTRUE = [false, true];
const valueFALSE = '1';

const describes = [
	{type: true
		, message:"Data Válida:"
		//, test: test
		, values: [new Date()] 
	}
	, {type: false
		, message:"Data inválidas:"
	//	, test: test
		, values: ['1', undefined, null, 0] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.is.js')('../quarks/quark-isDate', describes);