'use strict';

require('../../../config/db-config');

const chai = require('chai');
const expect = chai.expect;

const UserSchema = require('../molecules/molecule');
const User = require('../../../modules/model')('Usuarios', UserSchema);

before((done) => {
	User.create({
		email: 'tuchedsf@gmail.com',
		password: 'admin'
	}, (err, data) => {
		if (err) console.log(err);
		//console.log(data);
	});
	done();
});

after((done) => {
	User.remove({}, (err, data) => {
		if (err) console.log(err);
		//	console.log(data);
	});
	done();
});

describe("Senha verification test", ()=> {
	describe("validacao senha verdadeira", () => {
		it("senha admin é a senha do usuário", (done) => {
			User.find({email: 'tuchedsf@gmail.com'}, (err, user) => {
				expect(err).to.exit;
				expect(err).to.be.null;
				 user[0].verificaSenha('admin', function(isMatch) {
					console.log(isMatch);
					//return isMatch;
					expect(isMatch).to.be.true;
				});

				done();
			});
		});
	});

	describe("validacao senha falsa", () => {
		it("senha desenhooo não é a senha do usuário", (done) => {
			User.find({email: 'tuchedsf@gmail.com'}, (err, user) => {
				expect(err).to.exit;
				expect(err).to.be.null;
				 user[0].verificaSenha('desenhoooo', function(isMatch) {
					console.log(isMatch);
					//return isMatch;
					expect(isMatch).to.be.false;
				});
				 
				done();
			});
		});
	});
});