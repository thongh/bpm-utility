import request from 'request';
import https from 'https';

/**
 * Call BPM Rest API
 */
function callRestApi(request, response) { 
	console.log("calling rest api from server side");
	var username = "thongh";
    var password = "Pa55w0rd";
	
    var optionsget = {
	    host : '192.168.0.114', // here only the domain name
		// (no http/https !)
		port : 9443,
		path : '/rest/bpm/wle/v1/user/thongh?includeInternalMemberships=true&refreshUser=false&includeEditableUserPreferences=false&parts=all', // the rest of the url with parameters if needed
        method : 'GET', // do GET
		headers : {
		    Authorization: 'Basic ' + new Buffer('thongh:Pa55w0rd').toString('base64')
		}
    };
    var reqGet = https.request(optionsget, function(res){
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        var result= "";
        res.on('data', function(d) {
          result+=d;
          });
        res.on('end',function(){
          var object = JSON.parse(result);
          console.log(object.data.userName);
          response.send(object);
          });
        res.on('error', function(e) {
          console.log("Got error: " + e.message);
          });
      });
    
    
    reqGet.end();

}

export default { callRestApi };
