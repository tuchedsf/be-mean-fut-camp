'use strict';

const callback = require('./callback');
const getEquipe = require('./action-getEquipe');


const isJogoValido = (idJogo) => {
  return (element) => {
    if (element.id == idJogo) return element;
    return false;
  };
};

const isUserOrganizador = (idUser, organizadores) => {
  if (organizadores.indexOf(idUser) >= 0) return true;
  return false;
};

const isMandanteOrVisitante = (idEquipe, idUser, equipes) => {
  let isMandanteVisitante = false;
  equipes.forEach((element) => {
    if (element.id == idEquipe && element.userId == idUser) {
      isMandanteVisitante =  true;
      return;
    }
  });
  return isMandanteVisitante;
};

const isUserEquipeMandante = (idEquipeMandante, idUser, equipes) => {
  return isMandanteOrVisitante(idEquipeMandante, idUser, equipes);
};

const isUserEquipeVisitante = (idEquipeVisitante, idUser, equipes) => {
  return isMandanteOrVisitante(idEquipeVisitante, idUser, equipes);
};

const retornaIndexEquipeClassificacao = (idEquipe) => {
  return (element) => {
    if (element.equipeId.toString() == idEquipe) return element;
    return false;
  };
};

const actionAtualizaClassificacao = (Model, campeonato, jogo) => {
  //console.log(jogo);
 // console.log(jogo.mandante + ' - ' + jogo.visitante);
 // 
 //console.log(campeonato.classificacao[0]);

  //recupera equipe na classificacao
  let indexMandante = campeonato.classificacao.findIndex(retornaIndexEquipeClassificacao(jogo.mandante));
  let indexVisitante = campeonato.classificacao.findIndex(retornaIndexEquipeClassificacao(jogo.visitante));
 // console.log(indexMandante);
  //console.log(campeonato.classificacao[indexMandante]);

  //atualiza classificacao de acordo resultado jogo.
  if (jogo.placarMandante > jogo.placarVisitante){
    campeonato.classificacao[indexMandante].jogos = campeonato.classificacao[indexMandante].jogos + 1; 
    campeonato.classificacao[indexMandante].pontos = campeonato.classificacao[indexMandante].pontos + campeonato.pontos_vitoria;
    campeonato.classificacao[indexMandante].vitorias = campeonato.classificacao[indexMandante].vitorias + 1; 
    campeonato.classificacao[indexMandante].golsFavor = campeonato.classificacao[indexMandante].golsFavor + jogo.placarMandante; 
    campeonato.classificacao[indexMandante].golsContra = campeonato.classificacao[indexMandante].golsContra + jogo.placarVisitante; 
    campeonato.classificacao[indexMandante].saldoGols = 
          campeonato.classificacao[indexMandante].golsFavor - campeonato.classificacao[indexMandante].golsContra; 

    campeonato.classificacao[indexVisitante].jogos = campeonato.classificacao[indexVisitante].jogos + 1; 
    campeonato.classificacao[indexVisitante].pontos = campeonato.classificacao[indexVisitante].pontos + campeonato.pontos_derrota;
    campeonato.classificacao[indexVisitante].derrotas = campeonato.classificacao[indexVisitante].derrotas + 1; 
    campeonato.classificacao[indexVisitante].golsFavor = campeonato.classificacao[indexVisitante].golsFavor + jogo.placarVisitante; 
    campeonato.classificacao[indexVisitante].golsContra = campeonato.classificacao[indexVisitante].golsContra + jogo.placarMandante; 
    campeonato.classificacao[indexVisitante].saldoGols = 
          campeonato.classificacao[indexVisitante].golsFavor - campeonato.classificacao[indexVisitante].golsContra; 

  }else if (jogo.placarMandante < jogo.placarVisitante){

    campeonato.classificacao[indexVisitante].jogos = campeonato.classificacao[indexVisitante].jogos + 1; 
    campeonato.classificacao[indexVisitante].pontos = campeonato.classificacao[indexVisitante].pontos + campeonato.pontos_vitoria;
    campeonato.classificacao[indexVisitante].vitorias = campeonato.classificacao[indexVisitante].vitorias + 1; 
    campeonato.classificacao[indexVisitante].golsFavor = campeonato.classificacao[indexVisitante].golsFavor + jogo.placarVisitante; 
    campeonato.classificacao[indexVisitante].golsContra = campeonato.classificacao[indexVisitante].golsContra + jogo.placarMandante; 
    campeonato.classificacao[indexVisitante].saldoGols = 
          campeonato.classificacao[indexVisitante].golsFavor - campeonato.classificacao[indexVisitante].golsContra; 


    campeonato.classificacao[indexMandante].jogos = campeonato.classificacao[indexMandante].jogos + 1; 
    campeonato.classificacao[indexMandante].pontos = campeonato.classificacao[indexMandante].pontos + campeonato.pontos_derrota;
    campeonato.classificacao[indexMandante].derrotas = campeonato.classificacao[indexMandante].derrotas + 1; 
    campeonato.classificacao[indexMandante].golsFavor = campeonato.classificacao[indexMandante].golsFavor + jogo.placarMandante; 
    campeonato.classificacao[indexMandante].golsContra = campeonato.classificacao[indexMandante].golsContra + jogo.placarVisitante; 
    campeonato.classificacao[indexMandante].saldoGols = 
          campeonato.classificacao[indexMandante].golsFavor - campeonato.classificacao[indexMandante].golsContra; 

  }else {
     campeonato.classificacao[indexVisitante].jogos = campeonato.classificacao[indexVisitante].jogos + 1; 
    campeonato.classificacao[indexVisitante].pontos = campeonato.classificacao[indexVisitante].pontos + campeonato.pontos_empate;
    campeonato.classificacao[indexVisitante].empates = campeonato.classificacao[indexVisitante].empates + 1; 
    campeonato.classificacao[indexVisitante].golsFavor = campeonato.classificacao[indexVisitante].golsFavor + jogo.placarVisitante; 
    campeonato.classificacao[indexVisitante].golsContra = campeonato.classificacao[indexVisitante].golsContra + jogo.placarMandante; 

    campeonato.classificacao[indexMandante].jogos = campeonato.classificacao[indexMandante].jogos + 1; 
    campeonato.classificacao[indexMandante].pontos = campeonato.classificacao[indexMandante].pontos + campeonato.pontos_empate;
    campeonato.classificacao[indexMandante].empates = campeonato.classificacao[indexMandante].empates + 1; 
    campeonato.classificacao[indexMandante].golsFavor = campeonato.classificacao[indexMandante].golsFavor + jogo.placarMandante; 
    campeonato.classificacao[indexMandante].golsContra = campeonato.classificacao[indexMandante].golsContra + jogo.placarVisitante; 
  }

  console.log(campeonato.classificacao[indexMandante]);
  console.log(campeonato.classificacao[indexVisitante]);

  //Model.update({_id: idCamp}, campeonato.classificacao, '', (err,data) => callback(err,data,res,0,0));
};

module.exports = (Model) => {
  return (res, idCamp, idJogo, idUser, placarMandante, placarVisitante) => {
    Model.findOne({ _id: idCamp }).sort({ grupo: 1 })
//    Model.findOne({ _id: idCamp }, { _id: 0, nome: 1, classificacao: 1, jogos: 1}).sort({ grupo: 1 })
      .exec((err, data) => { 
      //  console.log(placarMandante);
       // console.log(placarVisitante);
        // valida se jogo é do campeonato e é valido.
        let indexJogo = data.jogos.findIndex(isJogoValido(idJogo));
        console.log(indexJogo);
        if (indexJogo < 0) console.log('erro jogo invalido');
        
      //  idUser ='57aa0ac7339cb64004a09717';
        // valida se usuario é organizador, se for pode atualizar a partida.
        const isOrganizador = isUserOrganizador(idUser, data.organizadores);
        console.log(isOrganizador);

       
        if (isOrganizador) {
           // se usuario organizador atualiza o resultado e o flag nao precisando de auditoria.
          data.jogos[indexJogo].valido = true;
          data.jogos[indexJogo].placarVisitante = placarVisitante;
          data.jogos[indexJogo].placarMandante = placarMandante;

        }else {

          if (data.jogos[indexJogo].valido) {
            console.log('erro jogo ja foi validado não é possível editar o placar do jogo');
          }
           // se nao for organizador valida se o usuario é o responsável pelo time mandante/visitante do jogo 
           // 
           const isMandante = isUserEquipeMandante(data.jogos[indexJogo].mandante, idUser, data.equipes);
           const isVisitante = isUserEquipeVisitante(data.jogos[indexJogo].visitante, idUser, data.equipes);
           console.log(isMandante);
           console.log(isVisitante);

           if (!isMandante && !isVisitante) {
            console.log('Operação inválida!!time do usuario nao é mandante/visitante da partida');
           }
        // se usuario for mandante atualiza auditoria mandante e verifica se auditoria visitante esta preenchida, se não
        // apenas atualiza auditoria e pronto . Se sim realiza batimento do placar auditoria mandante e auditoria visitante
        // se tiverem iguais atualiza o resultado oficial e marca flag como valido se não apenas atualiza a auditoria 
        // e o organizador deverá informar qual o placar real do jogo.
        // mesma logica caso o seja visitante.   
          if (isMandante ) {
            data.jogos[indexJogo].auditoriaMandante.placarVisitante = placarVisitante;
            data.jogos[indexJogo].auditoriaMandante.placarMandante = placarMandante;
          }else {
            data.jogos[indexJogo].auditoriaVisitante.placarVisitante = placarVisitante;
            data.jogos[indexJogo].auditoriaVisitante.placarMandante = placarMandante;
          } 
          //console.log(data.jogos[indexJogo]);
        }
        // atualiza o jogo///
     // Model.update({_id: idCamp},data,'', (err,campeonato) => {
     //   if (err) return callback(err,campeonato,res,0,0);
        // se atualizou o jogo ok, chama rotina de atualizar classificacao
        //let indexJogo = campeonato.jogos.findIndex(isJogoValido(idJogo));
        actionAtualizaClassificacao(Model, data, data.jogos[indexJogo]);
       // callback(err,data,res,0,0)}
      //});
  });
 };
};