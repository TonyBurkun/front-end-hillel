let express = require('express');
let createUserMocks = require('./utils/user-mocks').createUserMocks;
let app = express();
let users = [];

let getUserArr = new Promise((resolve, error) => {
    let usersArr = createUserMocks(5);
    resolve(usersArr)
});
getUserArr
    .then(data => {
        users.push(...data);
    });


app.get('/', function (req, res) {
    res.send('App works');
});

app.use(express.json());


app.get('/users', function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(users);
});

app.post('/users', function (req, res) {
    users.push(req.body);
    res.send('Saved');
});

app.delete('/users/:id', function (req, res) {
    const {id} = req.params;
    let arrIndex = null;

    let findArrElement = users.find((item, index) => {
        if (toString(item.id) === toString(id)) {
            // converted to string because of ID can be as a number as complex string.
            arrIndex = index;
            return true;
        }
    });

    if (findArrElement && arrIndex !== null){
        users.splice(arrIndex, 1);
        res.send('Deleted');
    } else {
        res.send('Nothing to delete');
    }

});

app.listen(3000, function () {
    console.log('Run');
});