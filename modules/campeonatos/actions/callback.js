'use strict';

const error = require('./error');
const reponseFormat = require('./action-response-format');

module.exports = (err,data,res,page,maxPages) => {
	if (err) return error(err,res);
	res.writeHead(200, {'Content-Type': 'application/json'});
	return res.end(JSON.stringify(reponseFormat(res,data)));
};