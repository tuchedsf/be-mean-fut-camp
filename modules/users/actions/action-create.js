'use strict';

const error = require('../quarks/quark-errors-codes');
const callback = require('./callback');

module.exports = (Model) => {
	return (res, userParam) => {
		Model.findOne({email: userParam.email}, function (err, user) {
			if (err) { return callback(err, '', res, 0, 0) };
			// console.log(use)
			if (user != null) {
				return callback(error.userFound, '', res, 0, 0);
			}

			Model.create(userParam, (err,data) =>
				callback(err,data,res, 0, 0)
			);
		});
	};
};
