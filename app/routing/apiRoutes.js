// Your apiRoutes.js file should contain two routes: A GET route with the url
// /api/friends. This will be used to display a JSON of all possible friends. A
// POST routes /api/friends. This will be used to handle incoming survey
// results. This route will also be used to handle the compatibility logic.

// / ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");
// var friendData = require("../data/friendData");
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //  app.get("/api/friendData", function(req, res) {
  //   res.json(friendData);
  // });

  app.post("/api/friends", function(req, res) {
  //takes this match & loops through the other possible matches
		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var greatMatchData = req.body;
		var greatMatchName = greatMatch.name;
		var greatMatchImage = greatMatch.image;
		var greatMatchScore = greatMatch.score;

//calculates data/difference in score to other users
		var totalScore = 0;

//loop through the friends data array of objects to get each friends scores
		for ( var i = 0; i < friends.length; i++ ) {
			console.log(friends[i].name);
			totalScore = 0;

//loop through that friends score and the users score and calculate the 
// absolute difference between the two and push that to the total difference variable set above
			for ( var j = 0; j < 10; j++ ){

// We calculate the difference between the scores and sum them into the totalDifference
				totalScore += Math.abs(parseInt(greatMatchScore[j]) - parseInt(friends[i].score[j]));

// If the sum of differences is less then the differences of the current "best match"
			}

			if (totalScore <= greatMatch.matchDifference) {
				// Reset the bestMatch to be the new friend. 
				greatMatch.name = friends[i].name;
				greatMatch.photo = friends[i].photo;
				greatMatch.matchDifference = totalDifference;
			}
		}
		
		friends.push(usrData);
 
		res.json(greatMatch); 
  });

};