'use strict';

const assert = require('assert');
const describes = [
	{type: true
		, message:"is Greater than 5:"
		//, test: test
		, values: ['diego', 'admin', 'desenho'] 
	}
	, {type: false
		, message:"is not Greater than 5:"
	//	, test: test
		, values: ['abc', '1234', 'bob'] 
	}
];

//chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.validator.js')('../quarks/quark-validate-str-lengthGTE5', describes);