'use strict';

const describes =
  [
	{ type: true, message: 'É Impar Válido:', values: [1, 3, 5, 7, 9] },
	{ type: false, message: 'Não é Inpar:', values: [2, 4, 6, 8, 10] },
  ];

// chama a classe generica de testes informando qual o arquivo do teste, e quais os testes a serem feitos.
const test = require('./module.tests.quarks.is.js')('../quarks/quark-isImpar', describes);
