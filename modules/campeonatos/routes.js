'use strict';
const express = require('express');
const router = express.Router(); //cria objeto router para redirecionar as requisiçoes para o destino correto.
const CampeonatoModel = require('../campeonatos/organisms/organism');
const UserModel = require('../users/organisms/organism');

router.all('*', UserModel.validarAutenticacao, (req,res,next) => { // router.all é executado para todos os verbos http.
  console.log('all campeonato');
	next();
});

router.post('/new', (req, res) => {
	console.log("post new campeonato");
	const body = req.body;
	//console.log(body);
		CampeonatoModel.create(res, body);
});

router.get('/find',  (req,res,next) =>{
	console.log('find campeonato');
		 const page = 1;
     const q = req.query.q;
     const query = q ? {email: q} : {};
     //console.log(query);
   	 CampeonatoModel.find(res, query, page);
});

router.get('/:id', (req,res) =>{
	console.log('findOne campeonato');
     const id = req.params.id;
     const query = {"_id": id};
     CampeonatoModel.findOne(res, query);    
});

router.put('/:id', (req,res) => {
	console.log('put / update campeonato');
	const multi = false;
	const id = req.params.id;
 	const body = req.body;
  CampeonatoModel.update(res,{_id: id}, body, multi);
});

router.delete('/:id', (req,res) => {
	console.log('delete user campeonato');
	  const id = req.params.id;
    CampeonatoModel.remove(res, {_id: id});
});

router.put('/:id/organizador/:idUser', (req,res) =>{
	console.log('adicionar organizador');
	const idCamp = req.params.id;
	const idUser = req.params.idUser;
	console.log(idCamp + ' - ' + idUser);
	CampeonatoModel.adicionarOrganizador(res, idCamp, idUser);
});

router.delete('/:id/organizador/:idUser', (req,res) =>{
	console.log('remover organizador');
	const idCamp = req.params.id;
	const idUser = req.params.idUser;
	CampeonatoModel.removerOrganizador(res, idCamp, idUser);
});

router.put('/:id/adicionarEquipe', (req,res) =>{
	console.log('adicionar equipe');
	const idCamp = req.params.id;
	const body = req.body;
 // console.log(idCamp);
 // console.log(body);
	CampeonatoModel.adicionarEquipe(res, idCamp, body);
});

router.delete('/:id/removerEquipe/:idEquipe', (req,res) =>{
  console.log('remover equipe');
  const idCamp = req.params.id;
  const idEquipe = req.params.idEquipe;
  CampeonatoModel.removerEquipe(res, idCamp, idEquipe);
});

router.get('/:id/gerarTabelasClassificacao', (req,res) =>{
  console.log('gerarClassificacao campeonato');
     const idCamp = req.params.id;
     CampeonatoModel.gerarTabelasClassif(res, idCamp);    
});


module.exports = router;
