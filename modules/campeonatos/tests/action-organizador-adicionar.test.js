'use strict';


const util = require('util');
const chai =  require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');
const expect = chai.expect;

chai.use(chaiHttp); //referencia para o chai utilizar "metodos do servidor http"

//const UserOrganism = require('../organisms/organism');
const CampeonatoOrganism = require('../organisms/organism');

const login = {
    email: 'tuchedsf@gmail.com'
    , password: '123456'
  };
let user = '';
let token = '';
let idUser = '';

before(() => {
    console.log('see.. this function is run ONCE only, before first describe()');
    chai.request(app)
        .post('/V1/api/users/login')
        .send(login)
        .end(function(err, res){
            user = res.body.user;
            token = res.body.token;
            console.log(user);
            console.log(user._id);
        });
 }); 

//preebncher com um idValido ja existene.
const idCampeonato = '57a282286e8fe0901d901513'; 
const idCampeonatoError = 'testeerro';
const idUserError = '33lsd';

describe("Adicionar organizador campeonato", () => {
  describe( "Adicionar organizador", () => {
    it('expect add a organizador to campeonato', function(done) {
      chai.request(app)
        .get('/V1/api/campeonato/'+ idCampeonato + '/organizador/' + user._id)
        .set('x-access-token', token)
        .end(function(err, res){
            console.log(err);
          //  console.log(res.body);
            expect(res.status).to.be.eq(200);
            expect(res.type).to.be.eq('application/json');
           // expect(res.body).to.include.keys('location');
            //expect(res.body).to.include.keys('data');
            // expect(res.body.data).to.include.keys('email');
            // expect(res.body.data).to.include.keys('password');
            // expect(res.body.data).to.include.keys('_id');
            // expect(res.body.data).to.include.keys('created_at');
            // //testando valores
            // expect(res.body.data.email).to.equal('tuchedsf@gmail.com');
            id = res.body._id;
           // email = res.body.data.email;
           done();
        });
    });
    it('expect not add a organizador to campeonato idCampeonato inválido', function(done) {
      chai.request(app)
        .get('/V1/api/campeonato/'+ idCampeonatoError + '/organizador/' + idUser)
        .set('x-access-token', token)
        .end(function(err, res){
            console.log(res.body);
            expect(res.status).to.be.eq(200);
            expect(res.type).to.be.eq('application/json');
           // expect(res.body).to.include.keys('location');
            //expect(res.body).to.include.keys('data');
            // expect(res.body.data).to.include.keys('email');
            // expect(res.body.data).to.include.keys('password');
            // expect(res.body.data).to.include.keys('_id');
            // expect(res.body.data).to.include.keys('created_at');
            // //testando valores
            // expect(res.body.data.email).to.equal('tuchedsf@gmail.com');
            id = res.body._id;
           // email = res.body.data.email;
           done();
        });
    });
    it('expect not add a organizador to campeonato idUser inválido', function(done) {
      chai.request(app)
        .get('/V1/api/campeonato/'+ idCampeonato + '/organizador/' + idUserError)
        .set('x-access-token', token)
        .end(function(err, res){
            console.log(res.body);
            expect(res.status).to.be.eq(200);
            expect(res.type).to.be.eq('application/json');
           // expect(res.body).to.include.keys('location');
            //expect(res.body).to.include.keys('data');
            // expect(res.body.data).to.include.keys('email');
            // expect(res.body.data).to.include.keys('password');
            // expect(res.body.data).to.include.keys('_id');
            // expect(res.body.data).to.include.keys('created_at');
            // //testando valores
            // expect(res.body.data.email).to.equal('tuchedsf@gmail.com');
            id = res.body._id;
           // email = res.body.data.email;
           done();
        });
    });
  });
});

