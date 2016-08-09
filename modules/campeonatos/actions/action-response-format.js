'use strict';

const isOrganizador = (value) => {
	console.log(value);
	if (value.includes('organizador')) return true;
	return false;
}

const formataLocationOrganizador = (value) => {
	 if (isOrganizador(value)) {
	 	value = value.substr(0,value.indexOf('/organizador'));
	 }
	 return value;
}

const removeStringFromRequestURL = (value, valueToRemove) => {
    return value.substr(0,value.indexOf(valueToRemove));
}

module.exports = (res,data) => {
	
  let obj_response = '';
  switch (res.req.method) {
    case 'GET':
      if (res.req.originalUrl.includes('/V1/api/campeonatos/find')){
        var newData = [];
        data.forEach((element, index) => {
          newData.push({
            location : removeStringFromRequestURL(res.req.originalUrl, '/find') + element._id,
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
      break;
    case 'POST':
      if (res.req.originalUrl == '/V1/api/campeonatos/new') {
        obj_response = {
          location : removeStringFromRequestURL(res.req.originalUrl, '/new') + data._id,
          data: data 
        }
      }
      break;
    case 'PUT':
      let location = res.req.originalUrl;
      if (isOrganizador(location)) {
        location = formataLocationOrganizador(location);
      }

      obj_response = {
        location : location,
        data: data 
      }
      break;
    case 'DELETE':
      if(isOrganizador(res.req.originalUrl)) {
        let location = formataLocationOrganizador(res.req.originalUrl);
        obj_response = {
          location : location,
          data: data 
        }
      } else {
        obj_response = data; 
      }
    break;
    default:
      console.log(res.req.method);
      obj_response = data; 
      break;
  }




  
	// if ( (res.req.method == 'POST' && res.req.originalUrl == '/V1/api/campeonatos/new') ){
	// 	obj_response = {
 //          location : '/V1/api/campeonatos/' + data._id,
 //          data: data 
 //        }
	// }else if (res.req.method == 'GET') {

	// 	if (res.req.originalUrl.includes('/V1/api/campeonatos/find')){
	// 	  var newData = [];
	// 		data.forEach((element, index) => {
	// 			newData.push({
	// 				location : '/V1/api/campeonatos/' + element._id,
	// 				data: element 
	// 			});
	// 		});
	// 		obj_response = newData;
	// 	}else {
	// 		obj_response = {
	// 		location : res.req.originalUrl,
	// 		data: data 
	// 		}
	// 	}
	// } else if (res.req.method == 'PUT') {

	// 	let location = res.req.originalUrl;
	// 	if (isOrganizador(location)) {
	// 		location = formataLocationOrganizador(location);
	// 	}

	// 	obj_response = {
	// 		location : location,
	// 		data: data 
	// 	}


		
	// }else {
	// 	if(isOrganizador(res.req.originalUrl)) {
	// 		let location = formataLocationOrganizador(res.req.originalUrl);
	// 		obj_response = {
	// 		location : location,
	// 		data: data 
	// 		}
	// 	} else {
	// 		obj_response = data; 
	// 	}
	// }
	return obj_response;
};

