import request from 'request';
import https from 'https';

/*call list of process*/

function exposedProcess(request, response){
    var optionget={
        host: '192.168.0.113',
        port: 9443,
        path:'/rest/bpm/wle/v1/exposed/process',
        method: 'GET',
        headers : {
		    Authorization: 'Basic ' + new Buffer('phuoc:Pa55w0rd').toString('base64')
		}
    };
    var reqGet = https.request(optionget, (res)=>{
        console.log("calling rest api...");
        var result="";
        res.on('data', function(d){
            result+=d;
        });
        res.on('end', function(){
            response.send(result);

        });
        res.on('error',function(e){
            console.log("Got error:" + e.message);
        });
    });
    reqGet.end();
};

export default {exposedProcess};