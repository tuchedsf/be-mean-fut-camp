'use strict';

const valueTRUE = [1, 2];
const valueFALSE = '1';

const describes = [
	{type: true
		, message:"É Array"
		//, test: test
		, values: [valueTRUE] 
	}
	, {type: false
		, message:"Não é array"
	//	, test: test
		, values: [valueFALSE] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.is.js')('../quarks/quark-isArray', describes);