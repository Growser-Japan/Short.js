
function dgi(id){
    return document.getElementById(id);
}

function dca(className){
    return document.querySelectorAll(className);
}

function dgc(className){
    return document.getElementsByClassName(className);
}

function dgn(Name){
    return document.getElementsByName(Name);
}

function LOG(success, message){
    if (success){
        console.log("[INFO]:"+String(message)+"....ok");
    } else {
        console.log("[ERROR]:"+String(message)+"....faild");
    }
}

class Request {
    constructor(method, url, async){
        this.csrftoken;
        this.data;
        this.method = method;
        this.url = url;
        this.async = async;
    }
    submit(){
        json_data = JSON.stringify(this.data);
        this.request = new XMLHttpRequest;
        this.request.open(this.method, this.url, this.async);
        this.request.setRequestHeader("Content-Type", "application/json");
        this.request.setRequestHeader("X-CSRFToken", this.csrftoken);
        this.request.send(json_data);
        return this.request;
    }
}

