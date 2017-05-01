var config = require('./config/config');
var express = require('express');
var router = require('express').Router();
var app = express();
var api = require('./api/api');

//set up the app middleware
require('./middleware/appMiddleware')(app);

var homeRouter = router.get('/', function(req, res, next){
	res.render('index', {title: 'Hello from node js!', condition: false});
});

//routes for views
app.use('/', homeRouter);


//setup the api
app.use('/api', api);


//set up global error handling

//export the app for testing
module.exports = app;