'use strict';

module.exports = (value) => {
  const isEmpty = require('./quark-isEmpty')(value)
  const isString = require('./quark-isString')(value)

  if (isEmpty && isString) return true;
  
  return false;
};