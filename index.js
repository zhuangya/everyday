'use strict';

/**
 * all kinds of middlewares
 */

var logger = require('morgan');
var express = require('express');
var jade = require('jade');
var serveStatic = require('serve-static');

/**
 * config
 */

var webConfig = require('config').express;

var app = express();

/**
 * app settings
 */
app.set('title', 'everyday');
app.set('view engine', 'jade');

//app.use(logger());
app.use(require('response-time')());
app.use(require('errorhandler')());
app.use(serveStatic(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Everyday'
  });
});

app.listen(webConfig.port || 3000);