// 'use strict';

module.exports = (err, res) => {
  res.writeHead(err.status, { 'Content-Type': 'application/vnd.api+json' });
//  res.writeHead(err.status, { 'Content-Type': 'application/json' });
//  console.log(err);
  return res.end(JSON.stringify(err));
};
