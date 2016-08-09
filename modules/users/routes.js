'use strict';
const express = require('express');
const router = express.Router(); //cria objeto router para redirecionar as requisiçoes para o destino correto.
const UserModel = require('../users/organisms/organism');

router.all('*',(req,res,next) => { // router.all é executado para todos os verbos http.
  console.log('all users');
	next();
});

router.post('/new', (req, res) => {
	console.log("post new");
	const body = req.body;
	//console.log(body);
		UserModel.create(res, body);
});

router.get('/find', UserModel.validarAutenticacao,  (req,res,next) =>{
	console.log('find');
		 const page = 2;
     const q = req.query.q;
     const query = q ? {email: q} : {};
     //console.log(query);
   	 UserModel.find(res, query, page);
});

router.get('/:id', UserModel.validarAutenticacao, (req,res) =>{
	console.log('findOne');
     const id = req.params.id;
     const query = {"_id": id};
     UserModel.findOne(res, query);    
});

router.put('/:id', UserModel.validarAutenticacao, (req,res) => {
	console.log('put / update');
	const multi = false;
	const id = req.params.id;
 	const body = req.body;
  UserModel.update(res,{_id: id}, body, multi);
});

router.delete('/:id', UserModel.validarAutenticacao, (req,res) => {
	console.log('delete user');
	  const id = req.params.id;
    UserModel.remove(res, {_id: id});
});

router.post('/login', (req,res) => {
	console.log('login user');
	const body = req.body;
	console.log(body);
		UserModel.autenticarUsuario(res, body);
});


module.exports = router;
