'use strict';

const util = require('util');
const chai = require('chai');

const expect = chai.expect;
const timesA = ['A', 'B', 'C'];
const timesB = ['F', 'E', 'D'];
const emparear = require('../actions/action-emparear');


describe('Teste Emparear equipes Campeonato', () => {
  describe('array de 3 times', () => {
    it('expect return 3 empareamentos', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
    });
    it('expect array index 0  seja A X F', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[0]).to.eql({ mandante: 'A', visitante: 'F', rodada: 1, grupo: 1 });
    });
    it('expect array index 1  seja E X B', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[1]).to.eql({ mandante: 'E', visitante: 'B', rodada: 1, grupo: 1 });
    });
    it('expect array index 0  seja C X D', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[2]).to.eql({ mandante: 'C', visitante: 'D', rodada: 1, grupo: 1 });
    });
  });
});

const timesA2 = ['A', 'B'];
const timesB2 = ['D', 'C'];


describe('Teste Emparear equipes A2 Campeonato', () => {
  describe('array de 3 times', () => {
    it('expect return 3 empareamentos', () => {
      const jogos = emparear(timesA2, timesB2, 1, 1);
      console.log(jogos);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
    });
    it('expect array index 0  seja A X D', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[0]).to.eql({ mandante: 'A', visitante: 'F', rodada: 1, grupo: 1 });
    });
    it('expect array index 1  seja B X C', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[1]).to.eql({ mandante: 'E', visitante: 'B', rodada: 1, grupo: 1 });
    });
    it('expect array index 0  seja A X C', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[2]).to.eql({ mandante: 'C', visitante: 'D', rodada: 1, grupo: 1 });
    });
     it('expect array index 0  seja D X B', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[2]).to.eql({ mandante: 'C', visitante: 'D', rodada: 1, grupo: 1 });
    });
      it('expect array index 0  seja A X B', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[2]).to.eql({ mandante: 'C', visitante: 'D', rodada: 1, grupo: 1 });
    });
       it('expect array index 0  seja C X D', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[2]).to.eql({ mandante: 'C', visitante: 'D', rodada: 1, grupo: 1 });
    });
    it('expect array index 0  seja C X D', () => {
      const jogos = emparear(timesA, timesB, 1, 1);
      expect(jogos).to.be.instanceof(Array);
      expect(jogos).to.have.lengthOf(3);
      expect(jogos[2]).to.eql({ mandante: 'C', visitante: 'D', rodada: 1, grupo: 1 });
    });
  });
});
