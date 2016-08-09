'use strict';


const util = require('util');
const chai =  require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');
const expect = chai.expect;

chai.use(chaiHttp); //referencia para o chai utilizar "metodos do servidor http"

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
    //  console.log(data);
  });
  done();
});


const user = {
  email: 'tuchedsf@gmail.com'
  , password: '' 
};


describe("Verifica login do usuario", () => {
  describe("Testes logins invalidos", () => {
    it('expected error - password nao informado', function(done) {
       chai.request(app)
        .post('/V1/api/users/login')
        .send(user)
        .end(function(err, res){
          try {
            expect(res.status ).to.equal( 401 );
            expect(res.type).to.be.eq('application/json');
            expect(res.body).to.include.keys('status');
            expect(res.body).to.include.keys('code');
            expect(res.body).to.include.keys('message');
            expect(res.body.status).to.equal(401);
            expect(res.body.code).to.equal(1001);
            expect(res.body.message).to.equal("Usuario e/ou password invalidos");
            done(); // success: call done with no parameter to indicate that it() is done()
          } catch( e ) {
            done( e ); // failure: call done with an error Object to indicate that it() failed
          }
        });
    });


    it('expected error - Usuario inexistente', function(done) {
       chai.request(app)
        .post('/V1/api/users/login')
        .send({email: 'alabama@gmail.com', password: 'necessita'})
        .end(function(err, res){
          try {
            expect(res.status ).to.equal( 401 );
            expect(res.type).to.be.eq('application/json');
            expect(res.body).to.include.keys('status');
            expect(res.body).to.include.keys('code');
            expect(res.body).to.include.keys('message');
            expect(res.body.status).to.equal(401);
            expect(res.body.code).to.equal(1002);
            expect(res.body.message).to.equal("Usuario inexistente");
            done(); // success: call done with no parameter to indicate that it() is done()
          } catch( e ) {
            done( e ); // failure: call done with an error Object to indicate that it() failed
          }
        });
    });

    it('expected error - Senha diferente da cadastrada', function(done) {
       chai.request(app)
        .post('/V1/api/users/login')
        .send({email: 'tuchedsf@gmail.com', password: 'oiaoiaoia'})
        .end(function(err, res){
          try {
            expect(res.status ).to.equal( 401 );
            expect(res.type).to.be.eq('application/json');
            expect(res.body).to.include.keys('status');
            expect(res.body).to.include.keys('code');
            expect(res.body).to.include.keys('message');
            expect(res.body.status).to.equal(401);
            expect(res.body.code).to.equal(1001);
            expect(res.body.message).to.equal("Usuario e/ou password invalidos");
            done(); // success: call done with no parameter to indicate that it() is done()
          } catch( e ) {
            done( e ); // failure: call done with an error Object to indicate that it() failed
          }
        });
    });
  });

  
   describe("Testes login valido", () => {
    it('expected sucess - usuario autenticado', function(done) {
       chai.request(app)
        .post('/V1/api/users/login')
        .send({email: 'tuchedsf@gmail.com', password: 'admin'})
        .end(function(err, res){
          try {
            expect(res.status ).to.equal( 200 );
            expect(res.type).to.be.eq('application/json');
            expect(res.body).to.include.keys('token');
            expect(res.body).to.include.keys('expires');
            expect(res.body).to.include.keys('user');
            done(); // success: call done with no parameter to indicate that it() is done()
          } catch( e ) {
            done( e ); // failure: call done with an error Object to indicate that it() failed
          }
        });
    });
  });

  
});