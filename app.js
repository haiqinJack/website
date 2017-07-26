var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var session = require('express-session');
var flash = require('connect-flash');
var ejsMate = require('ejs-mate');
var config = require('./configs/default');

var routes = require('./routes');

var app = express();

// //设置模板目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejsMate);

//设置文件静态目录
app.use(express.static('public'));

//解析中间件 req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// //flash 中间价，用来显示通知
app.use(flash());

app.locals.config = {
	title: config.title,
	keywords: config.keywords,
	description: config.description
};

routes(app);

app.listen(config.port);