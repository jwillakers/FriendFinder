console.log('server is starting');

// Dependencies so app will run
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

// deploying Express which is essentially a function
var app = express ();


// Sets the Exprss app to handle Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Set Static path
app.use(express.static(path.join(__dirname, 'app/public')));


// Set Routing for app to know what directory to go to when user requests info
require('./routing/apiRoutes.js')(app); 
require('./routing/htmlRoutes.js')(app);


// Starts server to listen for functions on port 3000
app.listen(3000, function() {
	console.log("Server started on Port 3000");
});
