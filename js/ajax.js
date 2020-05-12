function request(method, baseURL){
    return new Promise((success, error) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, baseURL, true);
        xhr.send();

        xhr.onload = function(){
            success(JSON.parse(xhr.response));
        };
        xhr.onerror = function() {
            error(JSON.parse(xhr.response));
        };
    });
}




function get(baseURL){
    return request('GET', baseURL);
}