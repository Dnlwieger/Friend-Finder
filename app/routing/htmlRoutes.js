
var path = require("path");

// module.exports is allowing us to make this information available to the other files
module.exports = function(app) {

    
    
    

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
// by using app.use instead of app.get here, we are setting up a default of which page to send to the user if nothing else is given for the URL
    });
    app.use( function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};

