'use strict';

module.exports = (res,data) => {
	let obj_response = '';
	if ( (res.req.method == 'POST' && res.req.originalUrl == '/V1/api/users/new') ){
		obj_response = {
			location : '/V1/api/users/' + data._id,
			data: data 
		}
	}else if (res.req.method == 'GET') {

		if (res.req.originalUrl.includes('/V1/api/users/find')){
		  var newData = [];
			data.forEach((element, index) => {
				newData.push({
					location : '/V1/api/users/' + element._id,
					data: element 
				});
			});
			obj_response = newData;
		}else {
			obj_response = {
			location : res.req.originalUrl,
			data: data 
			}
		}

		//console.log(data);
	} else if (res.req.method == 'PUT') {
		obj_response = {
			location : res.req.originalUrl,
			data: data 
		}
	}else {
		obj_response = data; 
	}
	return obj_response;
};