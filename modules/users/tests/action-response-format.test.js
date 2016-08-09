'use strict';

const chai = require('chai');
const expect = chai.expect;
const actionFormataResponse = require('../actions/action-response-format');

const data = { '_id': '579b9ed192a38eed6194e21e',
    email: 'tuchedsf@gmail.com',
    password: '$2a$05$xFk905MORFCp2P6FU83yuuf57oUvUo4MgGmvcHguddbKYT37LM/Lm',
    __v: 0,
    created_at: '2016-07-29T18:22:09.852Z' };

const dataArray = [ { '_id': '579b9ed192a38eed6194e21e',
    email: 'tuchedsf@gmail.com',
    password: '$2a$05$xFk905MORFCp2P6FU83yuuf57oUvUo4MgGmvcHguddbKYT37LM/Lm',
    __v: 0,
    created_at: '2016-07-29T18:22:09.852Z' },
  { '_id': '579ba00a92a38eed6194e21f',
    email: 'teste@gmail.com',
    password: '$2a$05$SJG0aiHRszaS.QfiVKcvLOGSxfNgX1zzlK.Mb9d3p3kfOdlMyxskS',
    __v: 0,
    created_at: '2016-07-29T18:27:22.394Z' } ];


//const resGet = {req: { method:  , originalUrl: }};
const resPost = {req: { method: 'POST', originalUrl: '/V1/api/users/new' }};
const resGet = {req: { method: 'GET', originalUrl: '/V1/api/users/find' }};
const resGetParam = {req: { method: 'GET', originalUrl: '/V1/api/users/find?q=tuchedsf@gmail.com' }};
const resGetFindOne = {req: { method: 'GET', originalUrl: '/V1/api/users/' }};
const resUpdate = {req: { method: 'PUT', originalUrl: '/V1/api/users/' }};
const resDelete = {req: { method: 'DELETE', originalUrl: '/V1/api/users/' }};

let result = ''; 
describe("Testes formatacao de response", () => {
	describe("Formata response action create", () => {
		it("New User - devolve response, com location e data no json", ()=> {
			result = actionFormataResponse(resPost, data);
			expect(result).to.include.keys('location');
			expect(result).to.include.keys('data');
			expect(result.location).to.not.be.null;
			expect(result.location).to.be.equal('/V1/api/users/579b9ed192a38eed6194e21e');
			expect(result.data).to.not.be.null;
			expect(result.data._id).to.be.equal('579b9ed192a38eed6194e21e');
			expect(result.data.email).to.be.equal('tuchedsf@gmail.com');
		});
	});
	describe("Formata response action find", () => {
		it("Find sem parametro - devolve array  response, com location e data no json", ()=> {
			result = actionFormataResponse(resGet, dataArray);
			expect(result).to.be.array;
			//expect(result).to.include.keys('location');
			//expect(result).to.include.keys('data');
			//expect(result.location).to.not.be.null;
			//expect(result.location).to.be.equal('/V1/api/users/579b9ed192a38eed6194e21e');
			//expect(result.data).to.not.be.null;
			//expect(result.data._id).to.be.equal('579b9ed192a38eed6194e21e');
			//expect(result.data.email).to.be.equal('tuchedsf@gmail.com');
		});
		it("Find com parametro - devolve array response, com location e data no json", ()=> {
			result = actionFormataResponse(resGetParam, dataArray);
			expect(result).to.be.array;
			//expect(result).to.include.keys('location');
			//expect(result).to.include.keys('data');
			//expect(result.location).to.not.be.null;
			//expect(result.location).to.be.equal('/V1/api/users/579b9ed192a38eed6194e21e');
			//expect(result.data).to.not.be.null;
			//expect(result.data._id).to.be.equal('579b9ed192a38eed6194e21e');
			//expect(result.data.email).to.be.equal('tuchedsf@gmail.com');
		});
	});
	describe("Formata response action findOne", () => {
		it("devolve response, com location e data no json", ()=> {
			result = actionFormataResponse(resGetFindOne, data);
			expect(result).to.not.be.array;
			expect(result).to.include.keys('location');
			expect(result).to.include.keys('data');
			expect(result.location).to.not.be.null;
			expect(result.location).to.be.equal('/V1/api/users/579b9ed192a38eed6194e21e');
			expect(result.data).to.not.be.null;
			expect(result.data._id).to.be.equal('579b9ed192a38eed6194e21e');
			expect(result.data.email).to.be.equal('tuchedsf@gmail.com');
		});
	});
	describe("Formata response action upate", () => {
		it("devolve response update formatada", ()=> {
			result = actionFormataResponse(resGetFindOne, data);
			expect(result).to.not.be.array;
		});
	});
	describe("Formata response action delete", () => {
		it("devolve response delete formatada", ()=> {
			result = actionFormataResponse(resGetFindOne, data);
			expect(result).to.not.be.array;
		});
	});
});