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


const campeonato = {
  nome:  'copa naboa'
  , mata_mata: false
  , qtde_equipes: 4
  , qtde_grupos: 1
  , qtde_equipes_classificadas: 2
  , qtde_equipes_rebaixadas: 1
  , pontos_vitoria: 3
  , pontos_empate: 1
  , pontos_derrota: 0
  , regulamento: 'campeonato teste dos testes'
  , organizadores: [user._id]
  , criterios_desempate: 'saldoGols'
}


describe("Organism Campeonato Test", () => {
let id = 0;
  //let email = '';
  console.log('Usuario' + user._id);
  describe( "Create campeonato", () => {
    it('expect add a campeonato on /campeonatos POST', function() {
      chai.request(app)
        .post('/V1/api/campeonato/new')
        .send(campeonato)
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
           //done();
        });
    });
  });


  // describe( "Find user", () => {
  //   it('expect find all users', function(done) {
  //     chai.request(app)
  //       .get('/V1/api/users/find')
  //       .set('x-access-token', token)
  //       .end(function(err, res){
  //           //console.log(res);
  //           expect(res.status).to.be.eq(200);
  //           expect(res.type).to.be.eq('application/json');
  //           expect(res).to.include.keys('body');
  //           expect(res.body).to.be.instanceof(Array);
  //           //expect(res.body[0]).to.be.eq(user.email);
  //         done();
  //       });
  //   });

    // it('expect find a user on /usuarios by email', function(done) {
    //   chai.request(app)
    //     .get('/V1/api/users/find?q=' + email)
    //     .set('x-access-token', token)
    //     .end(function(err, res){
    //         expect(res.status).to.be.eq(200);
    //         expect(res.type).to.be.eq('application/json');
    //         expect(res).to.include.keys('body');
    //         expect(res.body).to.be.instanceof(Array);
    //       done();
    //     });
    // });

  //   it('expect findOne user by id', function(done) {
  //     chai.request(app)
  //       .get('/V1/api/users/' + id)
  //       .set('x-access-token', token)
  //       .end(function(err, res){
  //           expect(res.status).to.be.eq(200);
  //           expect(res.type).to.be.eq('application/json');
  //           expect(res).to.include.keys('body');
  //           expect(res.body).to.include.keys('email');
  //           expect(res.body).to.include.keys('password');
  //           expect(res.body).to.include.keys('_id');
  //           expect(res.body).to.include.keys('created_at');
  //           done();
  //       });
  //   });
  // });

  // describe( "Update user", () => {
  //   it('expect update a user on /usuarios PUT', function(done) {
  //     chai.request(app)
  //       .put('/V1/api/users/' + id)
  //       .set('x-access-token', token)
  //       .send({password: 'resetPWD'})
  //       .end(function(err, res){
  //           expect(res.status).to.be.eq(200);
  //           expect(res.type).to.be.eq('application/json');
  //           //testanto propriedades do retorno
  //           expect(res.body).to.include.keys('location');
  //           expect(res.body).to.include.keys('data');
  //           expect(res.body.data).to.include.keys('ok');
  //           expect(res.body.data).to.include.keys('nModified');
  //           expect(res.body.data).to.include.keys('n');
  //           //testando valores
  //           expect(res.body.data.ok).to.equal(1);
  //           expect(res.body.data.nModified).to.equal(1);
  //           expect(res.body.data.n).to.equal(1);
  //         done();
  //       });
  //   });
  // });



  // describe( "Delete user", () => {
  //   it('expect delete a user on /usuarios delete', function(done) {
  //     chai.request(app)
  //       .delete('/V1/api/users/' + id)
  //       .set('x-access-token', token)
  //       .end(function(err, res){
  //           expect(res.status).to.be.eq(200);
  //           expect(res.type).to.be.eq('application/json');
  //           //testanto propriedades do retorno
  //            expect(res.body).to.include.keys('ok');
  //            expect(res.body).to.include.keys('n');
  //           //testando valores
  //            expect(res.body.ok).to.equal(1);
  //            expect(res.body.n).to.equal(1);
  //         done();
  //       });
  //   });
  // });

  
});