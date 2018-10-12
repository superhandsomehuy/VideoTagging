var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
	var newUser = ""; //The new task data which is posted from app.js will be stored in here
	var finalDatabase = ""; //This will be the final version of our database when we finish
	var database = fs.readFileSync('./database.json'); //Get all data from our json file as a string
	var JsonDatabase = JSON.parse(database); //Convert that string into an array of JSON Objects
	request.on('data', function(postdata){ //handling the data request		
		newUser += postdata; //Assign the posted data into newTask variable as a string
	});
	request.on('end', function () { //What happens when we get the data
		var JsonNewUser = JSON.parse(newUser); //convert that new task string into a JSON object
		JsonDatabase.push(JsonNewUser); //use the push function to push that new task into the existing database
		finalDatabase = JSON.stringify(JsonDatabase); //convert our final array of JSON objects to a string
		console.log("The final database is: " + finalDatabase); //Check if the final database has been pushed successfully
		fs.writeFile('./database.json', finalDatabase); //Add all those database into our json file
	});
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//var database = fs.readFileSync('./database.json');
    //response.end(database);
	if(request.method === "")
}).listen(8000);
console.log("Server is running on port 8000...");