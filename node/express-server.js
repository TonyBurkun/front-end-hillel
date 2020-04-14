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
    let arrIndex = null;

    let findArrElement = favourites.find((item, index) => {
        if (toString(item.id) === toString(id)) {
            // converted to string because of ID can be as a number as complex string.
            arrIndex = index;
            return true;
        }
    });

    if (findArrElement && arrIndex !== null){
        favourites.splice(arrIndex, 1);
        res.send('Deleted');
    } else {
        res.send('Nothing to delete');
    }

});

app.listen(3000, function () {
    console.log('Run');
});