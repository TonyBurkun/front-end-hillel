var express = require('express');
var app = express();

var favourites = [];

app.get('/', function (req, res) {
    res.send('App works');
});

app.use(express.json());

app.get('/favourites', function (req, res) {
    res.json(favourites);
});

app.post('/favourites', function (req, res) {
    favourites.push(req.body);
    res.send('Saved');
});

app.delete('/favourites/:id', function (req, res) {
    const {id} = req.params;

    let indexElem = favourites.findIndex(item => {
        let objID = JSON.stringify(item.id);
        return objID === id
    });


    if (~indexElem){
        favourites.splice(indexElem, 1);
        res.send('Deleted');
    } else {
        res.send('Nothing to delete');
    }

});

app.listen(3000, function () {
    console.log('Run');
});