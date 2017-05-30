'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs'); // utilizado para encriptar a senha do usuario.

const Schema = mongoose.Schema;

const email = require('../atoms/atom-email');
const perfil = require('../atoms/atom-perfil');
const password = require('../atoms/atom-password');
const created_at = require('../atoms/atom-created_at');
const campeonatos = [require('../atoms/atom-campeonatoRef')(Schema)];

const schema = {
  email,
  password,
  perfil,
  created_at,
  campeonatos,
};

const UserSchema = new Schema(schema);

// funcao que sera executada sempre antes de salvar o registro no banco
// ela ira encriptar o password para que ele seja salvo criptografado no banco.
UserSchema.pre('save', function(next) {
  let user = this;
  //verifica se password foi alterado, se nao foi retorna next para executar o fluxo da aplicacao.
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash; // se nao der erro atribou o password encriptografado ao usuario.
      next();
    });
  });
});

//funcao para verificar se a senha do usuario realmente esta correta.
UserSchema.methods.verificaSenha = function(password, next) {
  //console.log('verifica senha');
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(isMatch);
  });
};

module.exports = UserSchema;
