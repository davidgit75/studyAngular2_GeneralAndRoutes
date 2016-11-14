var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
var server = http.Server(app);
var router = express.Router(); 

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));

router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.htlm'));
});

app.use("/", router);

server.listen(process.env.PORT || 3010);

module.exports = app;
