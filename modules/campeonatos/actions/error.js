'use strict';

module.exports = (err,res) => {
		res.writeHead(err.status, {'Content-Type': 'application/json'});
	 return res.end(JSON.stringify(err));
};