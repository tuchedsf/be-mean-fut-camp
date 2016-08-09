'use strict';

const assert = require('assert');
const describes = [
	{type: true
		, message:"is greater than 0:"
		//, test: test
		, values: [1,2,3] 
	}
	, {type: false
		, message:"is less than 0:"
	//	, test: test
		, values: [-1] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.validator.js')('../quarks/quark-isNumberGT0Validate', describes);