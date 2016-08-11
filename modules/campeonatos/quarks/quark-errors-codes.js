'use strict';


const campeonatoUserinvalid		=  {"status" : 401, "code" : 2000, "message" : 'Campeonato e/ou usuário inválido'};
const falhaBuscarCamp		  	=  {"status" : 401, "code" : 2001, "message" : 'Falha ao buscar o campeonato informado'};
const falhaBuscarUser		 	=  {"status" : 401, "code" : 2002, "message" : 'Falha ao buscar o usuario informado'};
const usuarioJaEHOrganizador  	=  {"status" : 401, "code" : 2003, "message" : 'Operação Inválida. Usuário já organizador'};
const usuarioNJaEHOrganizador   =  {"status" : 401, "code" : 2003, "message" : 'Operação Inválida. Usuário não é organizador'};
const equipeJaInscrita          =  {"status" : 401, "code" : 2004, "message" : 'Operação Inválida. Equipe já inscrita no campeonato'};
const equipeNaoInscrita        	=  {"status" : 401, "code" : 2005, "message" : 'Operação Inválida. Equipe não está inscrita no campeonato'};
const numeroEquipesNDivisivel   =  {"status" : 401, "code" : 2006, "message" : 'Numero de equipes não é divisivel pelo número de grupos'};
const classificacaoJaGerada     =  {"status" : 401, "code" : 2007, "message" : 'Operação Inválida. Classificação já foi gerada'};
 

const ERROR = {
	 campeonatoUserinvalid
	 , falhaBuscarCamp
	 , falhaBuscarUser
	 , usuarioJaEHOrganizador
	 , usuarioNJaEHOrganizador
   , equipeJaInscrita
   , equipeNaoInscrita
   , numeroEquipesNDivisivel
   , classificacaoJaGerada
};

module.exports = ERROR;
