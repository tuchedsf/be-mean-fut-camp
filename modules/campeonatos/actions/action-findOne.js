'use strict';

const callback = require('./callback');

module.exports = (Model) => {
	return (res, id) => {
		Model.findOne(id, (err,data) => callback(err,data,res, 0, 0)).populate('organizadores');
	};
}