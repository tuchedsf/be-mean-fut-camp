'use strict';

const callback = require('./callback');

module.exports = (Model) => {
	return (res,query,mod, opt) => {
		const options = opt ? {multi: true} : '';
		Model.update(query,mod,options, (err,data) => callback(err,data,res,0,0));
	};
}