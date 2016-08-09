'use strict';

const callback = require('./callback');
module.exports = (Model) => {
	return (res, user) => {
  	Model.create(user, (err,data) =>  
  		callback(err,data,res, 0, 0)
  		);
	};
};