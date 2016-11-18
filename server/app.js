var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var multer = require("multer");

var app = express();
var server = http.Server(app);
var router = express.Router(); 

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../dist', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/dist", express.static(path.join(__dirname, '../dist')));
app.use("/assets", express.static(path.join(__dirname, './assets')));


// Instances of multer
var upload = multer({
  dest: './FILES',
  rename: function(fieldname, filename){
    return filename + Date.now();
  },
  onFileUploadStart: function(file){
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function(file){
    console.log(file.fieldname + ' upload to ' + file.path);
  }
});

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  next();
});

router.get("/*", function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

router.post("/test/data", function(req, res){
  console.log("DATA TEST");
  res.send({message: "Test Data / Another GET REQUEST"});
});

router.post("/user", upload.single("document"), function(req, res){
  console.log("POST USER");
  console.log(req.body);
  console.log(req.file);

  res.send({message: "user received by post"});
});

app.use("/", router);

server.listen(process.env.PORT || 3000);

module.exports = app;
