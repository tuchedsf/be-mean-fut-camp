'use strict';

module.exports = (idEquipe, idUser, equipes) => {
  let isMandanteVisitante = false;
  equipes.forEach((element) => {
    if (element.id.toString() === idEquipe.toString() && element.userId.toString() === idUser.toString()) {
      isMandanteVisitante = true;
      return isMandanteVisitante;
    }
  });
  return isMandanteVisitante;
};
