var express = require('express');
var router = express.Router();
var config = require('../configs/default');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index');
	});
};