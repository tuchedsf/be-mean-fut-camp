'use strict';

const util = require('util');
const chai = require('chai');
const expect = chai.expect;

const montaEmpareamentos = require('../actions/action-monta-empareamentos');

const classificacao = [
  { equipe_id: 'A', grupo: 1 },
  { equipe_id: 'B', grupo: 1 },
  { equipe_id: 'C', grupo: 1 },
  { equipe_id: 'D', grupo: 1 },
  { equipe_id: 'E', grupo: 1 },
  { equipe_id: 'F', grupo: 1 },
];

const timesPorGrupo = 6; // recuperado do campeonato
const quantidadeGrupos = 1; // recuperado do campeonato

describe('Teste retorno empareamento equipes Campeonato', () => {
  const empareamentos = montaEmpareamentos(quantidadeGrupos, classificacao, timesPorGrupo, false);
  describe('array de 12 empareamentos', () => {
    it('expect return 12 empareamentos', () => {
      expect(empareamentos).to.be.instanceof(Array);
      expect(empareamentos).to.have.lengthOf(12);
    });
    it('expect have properties mandante / visitante / rodada / grupo', () => {
      empareamentos.forEach(element => {
         expect(element).to.include.keys('mandante');
         expect(element).to.include.keys('visitante');
         expect(element).to.include.keys('rodada');
         expect(element).to.include.keys('grupo');
      });
    });
  });
  describe('retorno dos empareamentos', () => {
    it('expect { mandante: "A", visitante: "F", rodada: 1, grupo: 1  } on index 0', () => {
      expect(empareamentos[0]).to.have.property('mandante', 'A');
      expect(empareamentos[0]).to.have.property('visitante', 'F');
      expect(empareamentos[0]).to.have.property('rodada', 1);
      expect(empareamentos[0]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "E", visitante: "B", rodada: 1, grupo: 1  } on index 1', () => {
      expect(empareamentos[1]).to.have.property('mandante', 'E');
      expect(empareamentos[1]).to.have.property('visitante', 'B');
      expect(empareamentos[1]).to.have.property('rodada', 1);
      expect(empareamentos[1]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "C", visitante: "D", rodada: 1, grupo: 1  } on index 2', () => {
      expect(empareamentos[2]).to.have.property('mandante', 'C');
      expect(empareamentos[2]).to.have.property('visitante', 'D');
      expect(empareamentos[2]).to.have.property('rodada', 1);
      expect(empareamentos[2]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "E", visitante: "A", rodada: 2, grupo: 1  } on index 3', () => {
      expect(empareamentos[3]).to.have.property('mandante', 'E');
      expect(empareamentos[3]).to.have.property('visitante', 'A');
      expect(empareamentos[3]).to.have.property('rodada', 2);
      expect(empareamentos[3]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "D", visitante: "F", rodada: 2, grupo: 1  } on index 4', () => {
      expect(empareamentos[4]).to.have.property('mandante', 'D');
      expect(empareamentos[4]).to.have.property('visitante', 'F');
      expect(empareamentos[4]).to.have.property('rodada', 2);
      expect(empareamentos[4]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "B", visitante: "C", rodada: 2, grupo: 1  } on index 5', () => {
      expect(empareamentos[5]).to.have.property('mandante', 'B');
      expect(empareamentos[5]).to.have.property('visitante', 'C');
      expect(empareamentos[5]).to.have.property('rodada', 2);
      expect(empareamentos[5]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "A", visitante: "D", rodada: 3, grupo: 1  } on index 6', () => {
      expect(empareamentos[6]).to.have.property('mandante', 'A');
      expect(empareamentos[6]).to.have.property('visitante', 'D');
      expect(empareamentos[6]).to.have.property('rodada', 3);
      expect(empareamentos[6]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "C", visitante: "E", rodada: 3, grupo: 1  } on index 7', () => {
      expect(empareamentos[7]).to.have.property('mandante', 'C');
      expect(empareamentos[7]).to.have.property('visitante', 'E');
      expect(empareamentos[7]).to.have.property('rodada', 3);
      expect(empareamentos[7]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "F", visitante: "B", rodada: 3, grupo: 1  } on index 8', () => {
      expect(empareamentos[8]).to.have.property('mandante', 'F');
      expect(empareamentos[8]).to.have.property('visitante', 'B');
      expect(empareamentos[8]).to.have.property('rodada', 3);
      expect(empareamentos[8]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "C", visitante: "A", rodada: 4, grupo: 1  } on index 9', () => {
      expect(empareamentos[9]).to.have.property('mandante', 'C');
      expect(empareamentos[9]).to.have.property('visitante', 'A');
      expect(empareamentos[9]).to.have.property('rodada', 4);
      expect(empareamentos[9]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "B", visitante: "D", rodada: 4, grupo: 1  } on index 10', () => {
      expect(empareamentos[10]).to.have.property('mandante', 'B');
      expect(empareamentos[10]).to.have.property('visitante', 'D');
      expect(empareamentos[10]).to.have.property('rodada', 4);
      expect(empareamentos[10]).to.have.property('grupo', 1);
    });
    it('expect { mandante: "E", visitante: "F", rodada: 4, grupo: 1  } on index 11', () => {
      expect(empareamentos[11]).to.have.property('mandante', 'E');
      expect(empareamentos[11]).to.have.property('visitante', 'F');
      expect(empareamentos[11]).to.have.property('rodada', 4);
      expect(empareamentos[11]).to.have.property('grupo', 1);
    });
  });
});
