import request from 'request';
import https from 'https';

/*call list of process*/

function exposedProcess(request, response){
    console.log("controller is work");
};

export default {exposedProcess};