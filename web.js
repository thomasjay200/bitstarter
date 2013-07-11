var express = require('express');'

var fs = require('fs');

var app = express.createServer(express.logger());

var htmlfile = fs.readFile('index.html');

var filebuffer = new Buffer(htmlfile);

app.get('/', function(request, response) {
  response.send('htmlfile');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
