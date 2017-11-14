import request from 'request';

/**
 * Call BPM Rest API
 */
function callRestApi(req, res) {
  
    request(req, function(err, body){
	  console.log("calling from ibmbpm controller");
	  console.log(res);
      res.json(body); //res is the response object, and it passes info back to client side
    });

}

export default { callRestApi };
