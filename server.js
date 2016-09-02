var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000


app.use(express.static('client'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/client/index.html')
});

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/client/index.html')
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> Listening on port %s", PORT);
  }
});