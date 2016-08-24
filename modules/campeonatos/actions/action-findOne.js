'use strict';

const callback = require('./callback');
const ClassificacaoSchema = require('../../classificacao/molecules/molecule');
const Classificacao = require('../../../modules/model')('Classificacao',ClassificacaoSchema);
const EquipeSchema = require('../../equipe/molecules/molecule');
const Equipe = require('../../../modules/model')('Equipes',EquipeSchema);

module.exports = (Model) => {
	return (res, id) => {
		Model.findOne({_id: id }).populate('organizadores').exec((err,data)=> {

			//get 

				// data.classificacao.forEach((element)=> {
				// 		Classificacao.populate(element, {path: 'equipeId'}, function (err, doc) {
				// 	console.log(doc);
				// 	}); 
				// });

			// Armazenará os membros
    // var members = []

    // // Função que insere as informações dos membros na variável members
    // var getMember = function(cur){ members.push(db.users.findOne({_id: cur.member_id})) }

    // // Retorna as referências (ids) dos membros no projeto
    // var infoMembers = db.projects.findOne({name: /quinto projeto/i}, {_id: 0, members: 1})

    // // itera sobre cada membro do projeto
    // infoMembers.members.forEach(getMember)


			// data.equipes.forEach((element)=> {
			// 		Equipe.populate(element, {path: 'userId'}, function (err, doc) {
			// 	console.log(doc);
			// 	});
			// });



			// Classificacao.populate(data.classificacao, {path: 'equipeId'}, function (err, doc) {
			// 	console.log(doc);
			// });

			return callback(err,data,res, 0, 0);
		});
	};
}