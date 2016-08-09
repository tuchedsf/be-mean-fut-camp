'use strict';

const UserSchema = require('../molecules/molecule');
const User = require('../../../modules/model')('Usuarios',UserSchema);

//actions
const create = require('../actions/action-create')(User);
const find = require('../actions/action-find')(User);
const findOne = require('../actions/action-findOne')(User);
const remove = require('../actions/action-remove')(User);
const update = require('../actions/action-update')(User);
const autenticarUsuario = require('../actions/action-autenticarUsuario')(User);
const validarAutenticacao = require('../actions/action-validarAutenticacao')(User);

const user = () => User;

const userMethods = {
	create
	, find
	, findOne
	, update
	, remove
	, autenticarUsuario
	, validarAutenticacao
	, user
};

module.exports = userMethods;
