'use strict';

const callback = require('./callback');

module.exports = (Model) => {
  return (res, query, mod, user) => {
  // const options = opt ? { multi: true } : '';
	// Model.update(query,mod,options, (err,data) => callback(err,data,res,0,0));
    const userUpd = new Model(user);
    userUpd.password = mod.password;
    userUpd.save((err, data) => callback(err, data, res, 0, 0));
  };
};
