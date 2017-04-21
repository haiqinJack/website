var express = require('express');
var router = express.Router();

module.exports = function (app) {
	app.get('/', function index(req, res) {
		res.render('index', {

		});
	});
};