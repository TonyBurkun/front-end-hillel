function request(method, baseURL, success, error){
    let xhr = new XMLHttpRequest();
    xhr.open(method, baseURL, true);
    xhr.send();

    xhr.onload = function(){
        success(JSON.parse(xhr.response));
    };
    xhr.onerror = function() {
       error(JSON.parse(xhr.response));
    };

    return xhr;
}

function get(baseURL, success, error){
    return request('GET', baseURL, success || function(){}, error || function(){});
}