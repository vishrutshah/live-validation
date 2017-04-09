// var oav = require('oav');
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// var multer = require('multer');
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
    res.send('Hello World');
})

// This responds a POST request for the homepage
app.post('/semantic/validate', function (req, res) {
    console.log("Got a POST request for the /semantic/validate");
    // console.log(req.body);
    // if (req.body && req.body.swagger) {
    //     let swagger = req.body.swagger
    //     oav.validateSpec(swagger).then((result) => {
    //         console.dir(result, { depth: null, colors: true });
    //         res.send(result);
    //     }).catch((err) => {
    //         console.dir(err, { depth: null, colors: true });
    //         res.send(err);
    //     });
    // }
    res.send("Got a POST request for the /semantic/validate");
})

var port = process.env.PORT || 1337;
var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
