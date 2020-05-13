let http = require('http');
let createUserMocks = require('./lib/user_mock').createUserMocks;


let server = http.createServer(function(req, res){
    res.writeHead(200);

    let getUserArr = new Promise((resolve, error) => {
        let usersArr = createUserMocks(5);
        resolve(usersArr)
    });
    getUserArr
        .then(data => {
            res.end(JSON.stringify(data));
        });

});

server.listen(8080);



