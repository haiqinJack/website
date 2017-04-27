var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var session = require('express-session');
var flash = require('connect-flash');
var ejsMate = require('ejs-mate');

var routes = require('./routes');

var app = express();

//设置模板目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejsMate);

//设置文件静态目录
app.use('/public', express.static(path.join(__dirname, 'public')));

//解析中间件 req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//flash 中间价，用来显示通知
app.use(flash());

routes(app);

app.listen(80, function() {
	console.log(`listen app success`);
});