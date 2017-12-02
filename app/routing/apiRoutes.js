var friendsArray = require ('../data/friends.js');

module.exports = function (app) {

   

    app.post('/api/friends', function(req, res){
        // get the scores from the user
        
        var newFriend = req.body.scores;
        console.log(newFriend);
        // create an empty array for storing...
        var newArr = [];
        match = 0;
        // rename our variable for simplicity
        var arr = friendsArray;
        // loop through our friends.js data
        for (var i=0;i<arr.length;i++) {
            // console.log([i]);
            // set the difference to 0 
            var totalDifference = 0;
            // loop through the user data
            for (var j=0; j<newFriend.length; j++){
                // console.log(arr[i].scores[j]);
                // take our difference variable and add to it an absolute value which has been parsed from string to a numeral 
                 totalDifference += (Math.abs(parseInt(arr[i].scores[j]) - parseInt(newFriend[j])));
            }
            // push the new value of difference into our waiting array
            
                newArr.push(totalDifference);
                console.log(newArr);
        }
                    for(var i=0; i<newArr.length; i++){
                        if(newArr[i] <= newArr[match]){
                        match = i;
                        }
                    }
                    var pair = friendsArray[match];
                    res.json(pair);
                    console.log(pair);
           
    
                    friendsArray.push(newFriend);
                    res.json(newFriend);
    });

     app.get('/api/friends', function(req, res){
        res.json(friendsArray);
            
        });
}

