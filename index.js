var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
app.post('/', function(req, res) {
  res.send('Hi Bro!!!');
});

app.listen(3000,() =>
{
    console.log(`http://localhost:3000`);
});