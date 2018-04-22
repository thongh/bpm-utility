const credentials={
        auth:'',
        host:"",
        port:0
}
function setAuth(request,response){
    let result = JSON.parse(request.query.credentials);
    credentials.auth=result.auth;
    credentials.host=result.host;
    credentials.port=Number(result.port);
    response.send("Done");
}
export default {credentials, setAuth};
