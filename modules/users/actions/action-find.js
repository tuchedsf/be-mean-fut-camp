'use strict';

const callback = require('./callback');

module.exports = (Model) => {
	return (res, query, page) => {
	Model.count(query, (err, count) => {
		const maxPages = Math.ceil(count/25);
		Model.find(query,  (err, data) => callback(err,data, res, Number.parseInt(page), Number.parseInt(maxPages))).limit(25).skip(25 * (page - 1));
	});
};
}
