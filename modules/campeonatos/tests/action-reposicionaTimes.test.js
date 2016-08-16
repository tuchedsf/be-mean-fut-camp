'use strict';

const util = require('util');
const chai = require('chai');
const expect = chai.expect;

const reposicionaTimes = require('../actions/action-reposicionaTimes');

//let times = [];
describe('Teste reposicionamento de equipes', () => {
  describe('o que eh esperado apos primeiro reposicionamento', () => {
    const timesA = ['A', 'B', 'C'];
    const timesB = ['F', 'E', 'D'];
    const times = reposicionaTimes(timesA, timesB);
    it('expect return array com 6 times', () => {
      expect(times).to.be.instanceof(Array);
      expect(times).to.have.length.within(6, 6);
    });
    it('expect time index 0  seja A', () => {
      expect(times[0]).to.eql('A');
    });
    it('expect time index 1  seja F', () => {
      expect(times[1]).to.eql('F');
    });
    it('expect time index 2  seja B', () => {
      expect(times[2]).to.eql('B');
    });
    it('expect time index 3  seja E', () => {
      expect(times[3]).to.eql('E');
    });
    it('expect time index 4  seja D', () => {
      expect(times[4]).to.eql('D');
    });
    it('expect time index 5  seja C', () => {
      expect(times[5]).to.eql('C');
    });
  });
  describe('o que eh esperado apos segundo reposicionamento', () => {
    const timesA = ['A', 'F', 'B'];
    const timesB = ['E', 'D', 'C'];
    const times = reposicionaTimes(timesA, timesB);
    it('expect return array com 6 times', () => {
      expect(times).to.be.instanceof(Array);
      expect(times).to.have.length.within(6, 6);
    });
    it('expect time index 0  seja A', () => {
      expect(times[0]).to.eql('A');
    });
    it('expect time index 1  seja E', () => {
      expect(times[1]).to.eql('E');
    });
    it('expect time index 2  seja F', () => {
      expect(times[2]).to.eql('F');
    });
    it('expect time index 3  seja D', () => {
      expect(times[3]).to.eql('D');
    });
    it('expect time index 4  seja C', () => {
      expect(times[4]).to.eql('C');
    });
    it('expect time index 5  seja B', () => {
      expect(times[5]).to.eql('B');
    });
  });
});
