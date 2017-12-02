




// Require Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// shorthand express to "app" for quicker dot notation syntax
var app = express();
// sets our port for local use and readies the app for deployment on Heroku as well
var PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// includes apiRoutes.js 
require('./app/routing/apiRoutes.js')(app);
// includes htmlRoutes.js for use in the application and pass in express as the app as that function
require('./app/routing/htmlRoutes.js')(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})