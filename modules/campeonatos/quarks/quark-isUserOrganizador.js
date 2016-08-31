'use strict';

module.exports = (idUser, organizadores) => {
  if (organizadores.indexOf(idUser) >= 0) return true;
  return false;
};
