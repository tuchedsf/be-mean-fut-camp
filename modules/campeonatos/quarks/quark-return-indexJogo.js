'use strict';

module.exports = (idJogo) => {
  return (element) => {
    if (element.id == idJogo) return element;
    return false;
  };
};
