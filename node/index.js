console.log("Hello");

var fs = require("fs");
fs.writeFile("message.txt", "hello NodeJS", function(err){
    if (err) console.log("Error", err);
    console.log('FIle has been uploaded');
});

fs.readFile("message.txt", function (_, data) {
    console.log(data.toString('utf8'));
});