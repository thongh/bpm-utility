import https from 'https';
import request from 'request';


function startProcess(request, response){
    console.log("starting process...");
    var optionget={
        host: '192.168.0.113',
        port: 9443,
        path: '/rest/bpm/wle/v1/process?action=start&bpdId=25.5957d788-280a-4f0f-a188-43124232dcce&processAppId=2066.042f4689-596e-43cc-9f21-6035dd373067&parts=all',
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
export default {startProcess,checkCurrentState,finishTask};