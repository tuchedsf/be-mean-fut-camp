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
let campeonato = {
    "nome": "campeonato mineiro",
    "qtde_equipes": 6,
    "qtde_grupos": 2,
    "qtde_equipes_classificadas": 2,
    "qtde_equipes_rebaixadas": 0,
    "__v": 0,
    "created_at": "2016-08-22T11:44:41.671Z",
    "jogos": [
      {
        "_id": "57be38579fa3d2cd358191d3",
        "visitante": "57bae5e815b4cfb41ee42977",
        "mandante": "57bae5db15b4cfb41ee42974",
        "grupo": 1,
        "rodada": 1,
        "valido": false,
        "auditoriaVisitante": {
          "equipeId": "57bae5e815b4cfb41ee42977",
          "placarVisitante": 0,
          "placarMandante": 0
        },
        "auditoriaMandante": {
          "equipeId": "57bae5db15b4cfb41ee42974",
          "placarVisitante": 0,
          "placarMandante": 0
        },
        "placarVisitante": 0,
        "placarMandante": 0
      },
      {
        "_id": "57be38579fa3d2cd358191d4",
        "visitante": "57bae5cf15b4cfb41ee42972",
        "mandante": "57bae5db15b4cfb41ee42974",
        "grupo": 1,
        "rodada": 2,
        "valido": false,
        "auditoriaVisitante": {
          "equipeId": "57bae5cf15b4cfb41ee42972",
          "placarVisitante": 0,
          "placarMandante": 0
        },
        "auditoriaMandante": {
          "equipeId": "57bae5db15b4cfb41ee42974",
          "placarVisitante": 0,
          "placarMandante": 0
        },
        "placarVisitante": 0,
        "placarMandante": 0
      },
      {
        "_id": "57be38579fa3d2cd358191d5",
        "visitante": "57bae5e415b4cfb41ee42976",
        "mandante": "57bae5d715b4cfb41ee42973",
        "grupo": 2,
        "rodada": 1,
        "valido": false,
        "auditoriaVisitante": {
          "equipeId": "57bae5e415b4cfb41ee42976",
          "placarVisitante": 0,
          "placarMandante": 0
        },
        "auditoriaMandante": {
          "equipeId": "57bae5d715b4cfb41ee42973",
          "placarVisitante": 0,
          "placarMandante": 0
        },
        "placarVisitante": 0,
        "placarMandante": 0
      },
      {
        "_id": "57be38579fa3d2cd358191d6",
        "visitante": "57bae5df15b4cfb41ee42975",
        "mandante": "57bae5d715b4cfb41ee42973",
        "grupo": 2,
        "rodada": 2,
        "valido": false,
        "auditoriaVisitante": {
          "equipeId": "57bae5df15b4cfb41ee42975",
          "placarVisitante": 0,
          "placarMandante": 0
        },
        "auditoriaMandante": {
          "equipeId": "57bae5d715b4cfb41ee42973",
          "placarVisitante": 0,
          "placarMandante": 0
        },
        "placarVisitante": 0,
        "placarMandante": 0
      }
    ],
    "classificacao": [
      {
        "_id": "57bae5f215b4cfb41ee42978",
        "equipeId": "57bae5cf15b4cfb41ee42972",
        "grupo": 1,
        "saldoGols": 0,
        "golsContra": 0,
        "golsFavor": 0,
        "derrotas": 0,
        "empates": 0,
        "vitorias": 0,
        "pontos": 0,
        "jogos": 0
      },
      {
        "_id": "57bae5f215b4cfb41ee42979",
        "equipeId": "57bae5e815b4cfb41ee42977",
        "grupo": 1,
        "saldoGols": 0,
        "golsContra": 0,
        "golsFavor": 0,
        "derrotas": 0,
        "empates": 0,
        "vitorias": 0,
        "pontos": 0,
        "jogos": 0
      },
      {
        "_id": "57bae5f215b4cfb41ee4297a",
        "equipeId": "57bae5db15b4cfb41ee42974",
        "grupo": 1,
        "saldoGols": 0,
        "golsContra": 0,
        "golsFavor": 0,
        "derrotas": 0,
        "empates": 0,
        "vitorias": 0,
        "pontos": 0,
        "jogos": 0
      },
      {
        "_id": "57bae5f215b4cfb41ee4297b",
        "equipeId": "57bae5df15b4cfb41ee42975",
        "grupo": 2,
        "saldoGols": 0,
        "golsContra": 0,
        "golsFavor": 0,
        "derrotas": 0,
        "empates": 0,
        "vitorias": 0,
        "pontos": 0,
        "jogos": 0
      },
      {
        "_id": "57bae5f215b4cfb41ee4297c",
        "equipeId": "57bae5e415b4cfb41ee42976",
        "grupo": 2,
        "saldoGols": 0,
        "golsContra": 0,
        "golsFavor": 0,
        "derrotas": 0,
        "empates": 0,
        "vitorias": 0,
        "pontos": 0,
        "jogos": 0
      },
      {
        "_id": "57bae5f215b4cfb41ee4297d",
        "equipeId": "57bae5d715b4cfb41ee42973",
        "grupo": 2,
        "saldoGols": 0,
        "golsContra": 0,
        "golsFavor": 0,
        "derrotas": 0,
        "empates": 0,
        "vitorias": 0,
        "pontos": 0,
        "jogos": 0
      }
    ],
    "equipes": [
      {
        "_id": "57bae5cf15b4cfb41ee42972",
        "time": "atletico",
        "userId": "57aa0ac7339cb64004a09717"
      },
      {
        "userId": "57aa0ac7339cb64004a09717",
        "time": "cruzeiro",
        "_id": "57bae5d715b4cfb41ee42973"
      },
      {
        "_id": "57bae5db15b4cfb41ee42974",
        "time": "america",
        "userId": "57aa0ac7339cb64004a09717"
      },
      {
        "userId": "57aa0ac7339cb64004a09717",
        "time": "valerio",
        "_id": "57bae5df15b4cfb41ee42975"
      },
      {
        "_id": "57bae5e415b4cfb41ee42976",
        "time": "urt",
        "userId": "57aa0ac7339cb64004a09717"
      },
      {
        "userId": "57aa0ac7339cb64004a09717",
        "time": "vila nova",
        "_id": "57bae5e815b4cfb41ee42977"
      }
    ],
    "criterios_desempate": [],
    "organizadores": [
      {
        "_id": "579b9ed192a38eed6194e21e",
        "email": "tuchedsf@gmail.com",
        "password": "$2a$05$xFk905MORFCp2P6FU83yuuf57oUvUo4MgGmvcHguddbKYT37LM/Lm",
        "__v": 0,
        "campeonatos": [],
        "created_at": "2016-07-29T18:22:09.852Z"
      }
    ],
    "regulamento": "campeonato teste dos testes",
    "pontos_derrota": 0,
    "pontos_empate": 1,
    "pontos_vitoria": 3,
    "idaVolta": false,
    "mata_mata": false
};

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

      chai.request(app)
        .post('/V1/api/campeonato/new')
        .set('x-access-token', token)
        .send(campeonato)
        .end(function(err, res){
            console.log(err);
            campeonato = res.data;
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

