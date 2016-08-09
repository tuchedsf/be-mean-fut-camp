'use strict';

'use strict';

const util = require('util');
const chai =  require('chai');
const expect = chai.expect;

const campeonatoOrganism = require('../organisms/organism');
const UserOrganism = require('../../users/organisms/organism');
//cria um usuario antes de comecar os testes para pegar o id.
before(() => {
    console.log('see.. this function is run ONCE only, before first describe()');

 }); 

after(() => {
 console.log('see.. this function is run ONCE only, after describe()');
});


describe("Organism Campeonato Test", () => {

const campeonato = {
		nome: 'Liga Prodemge'
	, mata_mata:  false
  , qtde_equipes: 4
	, qtde_grupos: 1
	, qtde_equipes_classificadas: 2
	, qtde_equipes_rebaixadas: 0
	, pontos_vitoria: 3
	, pontos_empate: 1
	, pontos_derrota: 0
	, regulamento: 'cada time joga entre si...'
	, organizadores 
	, criterios_desempate: ['vitorias','saldo_gols']
	//, classificacao
	//, jogos 
	//, created_at: Date now()
}

	let id = 0;
		describe( "Create new campeonato", () => {
        it('expect a new campeonato has created', (done) => {
            campeonatoOrganism.create(campeonato, (err,data) => {
                id = data._id;
                expect(err).to.not.exist;
                expect(data._id).to.exist;
                expect(data.nome).to.be.eq('Liga Prodemge');
                expect(data.mata_mata).to.be.false;
                expect(data.qtde_equipes).to.be.eq(4);
                expect(data.qtde_grupos).to.be.eq(1);
                expect(data.qtde_equipes_classificadas).to.be.eq(2);
                expect(data.qtde_equipes_rebaixadas).to.be.eq(0);
                expect(data.pontos_vitoria).to.be.eq(3);
                expect(data.pontos_empate).to.be.eq(1);
                expect(data.pontos_derrota).to.be.eq(0);
                expect(data.regulamento).to.be.a('string');
                expect(data.criterios_desempate).to.be.instanceof(Array);
                //expect(data.created_at).to.have.property('multiply');
                done();
            });
        });
    });


    //const query = {nome: 'Liga Prodemge' };
    const query = {'_id': id };

    describe( "Find campeonato by name", () => {
        it('expect a list of campeonatos by id liga prodemge', (done) => {
            campeonatoOrganism.find(query, (err,data) => {
                expect(err).to.not.exist;
                expect(data).to.be.instanceof(Array);
                data.forEach((campeonato) => expect(campeonato).to.have.property('name').and.equal('Liga Prodemge'));
                done();
            });
        });
    });

		describe("Update campeonato ", () => {
        it('expect update the campeonato', (done) => {
            const mod = {mata_mata: true, pontos_vitoria: 6};
            const options = {};
            campeonatoOrganism.update(query, mod, options, (err,data) => {
                expect(err).to.not.exist;
                expect(data.nModified).to.be.eq(1);
                expect(data.ok).to.be.eq(1);
                done();
            });
        });
    });

    describe('delete campeonato', () => {
        it('expect delete campeonato', (done) => {
            campeonatoOrganism.delete(query, (err, data) => {
                expect(err).to.not.exist;
                expect(data.result.ok).to.be.eq(1);
                done();
            });
        });
    });
});