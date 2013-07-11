var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var filebuffer = fs.readFileSync('index.html');

filebuffer.toString('utf-8');

app.get('/', function(request, response) {
  response.send(filebuffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
