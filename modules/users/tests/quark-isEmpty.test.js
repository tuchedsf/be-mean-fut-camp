'use strict';

const describes = [
	{type: true
		, message:"is Empty:"
		//, test: test
		, values: [null] 
	}
	, {type: false
		, message:"not is Empty"
	//	, test: test
		, values: ['diego',2009] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.is.js')('../quarks/quark-isEmpty', describes);