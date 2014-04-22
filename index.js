'use strict';

var logger = require('morgan');
var express = require('express');
var app = express();

var webConfig = require('config').express;

app.set('title', 'everyday');
app.set('view engine', 'jade');

app.use(logger());
app.use(require('response-time')());
app.use(require('errorhandler')());

app.get('/', function (req, res) {
  res.send('hey');
});

app.listen(webConfig.port || 3000, function () {
  console.log(arguments);
});