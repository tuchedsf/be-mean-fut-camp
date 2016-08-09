'use strict';

const assert = require('assert');
const describes = [
	{type: true
		, message:"is EmptyString:"
		//, test: test
		, values: [''] 
	}
	, {type: false
		, message:"not is EmptyString"
	//	, test: test
		, values: ['diego',2009] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.validator.js')('../quarks/quark-isEmptyStringValidate', describes);