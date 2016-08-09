'use strict';

const callback = require('./callback');

module.exports = (Model) => {
	return (res, query) => {
		Model.remove(query, (err,data) => callback(err,data,res,0,0));
	};
}