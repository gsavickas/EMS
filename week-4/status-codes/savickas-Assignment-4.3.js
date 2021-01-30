const { response } = require('express');
var express = require('express');

var http = require('http');

var app = express();
// Error 404 not found
app.get('/not-found', function(req, res){
  res.status(404);

  res.json({
    error: "Resource request not found."
  });
});
// Success status 200
app.get('/ok', function(req, res){
  res.status(200);

  res.json({
    message: "Page loaded correctly."
  });
});
// Error status 501 page not implemented
app.get('/not-implemented', function(req, res){
  res.status(501);

  res.json({
    error: 'Page not implemented.'
  });
});

http.createServer(app).listen(3000, function(){
  console.log('Application has started and listening on port 3000!');
});

