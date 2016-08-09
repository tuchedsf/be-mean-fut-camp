'use strict';

const callback = require('./callback');

module.exports = (Model) => {
	return (res, query, page) => {
	Model.count(query, (err, count) => {
		const maxPages = Math.ceil(count/5);
		Model.find(query,  (err, data) => callback(err,data, res, Number.parseInt(page), Number.parseInt(maxPages))).populate('organizadores').limit(5).skip(5 * (page - 1));
	});
};
}
