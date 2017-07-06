var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var session = require('express-session');
var flash = require('connect-flash');
var ejsMate = require('ejs-mate');
var fs = require('fs');
var https = require('https');

var privateKey = fs.readFileSync('./3_www.c-fafn.com.key', 'utf8');
var certificate = fs.readFileSync('./2_www.c-fafn.com.crt', 'utf8');
var ca = fs.readFileSync('./1_root_bundle.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate, ca: ca};


// var routes = require('./routes');

var app = express();

// //设置模板目录
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
// app.engine('html', ejsMate);

// //设置文件静态目录
// app.use(express.static('public'));

// //解析中间件 req.body
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieParser());

// //flash 中间价，用来显示通知
// app.use(flash());

// routes(app);


app.get('/', function(req, res) {
	console.log(req.protocol,'=====');
	res.send('welcome to https')
})

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(3000, function() {
	console.log('htpps ');
});
