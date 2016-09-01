var Puppy = require('./db').Puppy;
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../browser')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/data', require('./data.router'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

Puppy.sync()
    .then(function () {
      app.listen(1337, function () {
        console.log('You can find some pups on port 1337!');
      });
    });

