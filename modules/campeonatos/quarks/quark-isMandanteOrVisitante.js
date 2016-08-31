'use strict';

module.exports = (idEquipe, idUser, equipes) => {
  console.log(idEquipe);
  console.log(idUser);
  console.log(equipes);
  let isMandanteVisitante = false;
  equipes.forEach((element) => {
    if (element.id.toString() === idEquipe.toString() && element.userId.toString() === idUser.toString()) {
      console.log('aqui');
      isMandanteVisitante = true;
      return isMandanteVisitante;
    }
  });
  return isMandanteVisitante;
};
