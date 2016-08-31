'use strict';

module.exports = (idEquipe) => {
  return (element) => {
    if (element.equipeId.toString() == idEquipe) return element;
    return false;
  };
};
