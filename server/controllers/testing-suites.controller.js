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
function startProcess(request, response){
    var optionget={
        host: '192.168.0.113',
        port: 9443,
        path: '/rest/bpm/wle/v1/process?action=start&bpdId='+request.query.itemID+'&processAppId='+request.query.processAppID+'&parts=all',
        method: 'POST',
        headers : {
		    Authorization: 'Basic ' + new Buffer('phuoc:Pa55w0rd').toString('base64')
        }
    }
    var reqGet = https.request(optionget, (res)=>{
        console.log("calling the start process api");
        var result="";
        res.on('data', function(d){
            result+=d;
        });
        res.on('end',function(){
            response.send(result);
        });
        res.on('error',function(e){
            console.log("Got error:" + e.message);
        });
    });
    reqGet.end();
}

function checkCurrentState(request,response){
    console.log("Checking current state of process instance...");
        var optionget={
        host: '192.168.0.113',
        port: 9443,
        path: '/rest/bpm/wle/v1/process/'+request.query.piid+'?parts=all',
        method: 'GET',
        headers : {
		    Authorization: 'Basic ' + new Buffer('phuoc:Pa55w0rd').toString('base64')
        }
    }
    var reqGet = https.request(optionget, (res)=>{
        var result;
        var obj;
        var listTask;
            result="";
            res.on('data', function(d){
                result+=d;
            });
            res.on('end',function(){ 
                response.send(result);
            });
        res.on('error',function(e){
            console.log("Got error:" + e.message);
        });
    });
    reqGet.end();
}

function finishTask(request,response){
    var result=request.query.args;
    result= result.replace(/{/g,'%7B');
    result= result.replace(/"/g,'%22');
    result= result.replace(/:/g,'%3A');
    result= result.replace(/,/g,'%2C');
    result= result.replace(/}/g,'%7D');
    result= result.replace(/ /g,'+');
    var optionget={
        host: '192.168.0.113',
        port: 9443,
        path: '/rest/bpm/wle/v1/task/'+request.query.tkiid+'?action=finish&params='+result+'&parts=all',
        method: 'PUT',
        headers : {
		    Authorization: 'Basic ' + new Buffer('phuoc:Pa55w0rd').toString('base64')
        }
    }

    var reqGet = https.request(optionget, (res)=>{
        var result="";
        res.on('data', function(d){
            result+=d;
        });
        res.on('end',function(){
            response.send(result);
        });
        res.on('error',function(e){
            console.log("Got error:" + e.message);
        });
    });
    reqGet.end();
    
}

export default {exposedProcess,startProcess,checkCurrentState,finishTask};