'use strict';

/**
 * all kinds of middlewares
 */

var logger = require('morgan');
var express = require('express');
var jade = require('jade');
var stylus = require('stylus');
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
app.use('/css', stylus.middleware({
  src: __dirname + '/stylus',
  dest: __dirname + '/public/css',
  compile: function (str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true);
  }
}));
app.use(serveStatic(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Everyday',
    lovemsg: '我要跨跃时间的长河划去找你了 如果我已经过去了你才收到消息会不会很神奇呢'
  });
});

app.listen(webConfig.port || 3000);