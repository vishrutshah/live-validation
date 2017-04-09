// var oav = require('oav');

// oav.validateExamples("https://github.com/Azure/azure-rest-api-specs/blob/master/arm-redis/2016-04-01/swagger/redis.json").then((result) => {
//     console.dir(result, { depth: null, colors: true });
// }).catch((err) => {
//     console.dir(err, { depth: null, colors: true });
// });
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var port = process.env.PORT || 1337;
var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})