'use strict';

const callback = require('./callback');
module.exports = (Model) => {
  return (res, campeonato) => {
		Model.create(campeonato, (err,data) => callback(err,data,res, 0, 0));
	};
};