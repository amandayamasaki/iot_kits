process.stdout.write('\033c');

var Particle = require('particle-api-js');
var keys = require('./keys.json');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 8000;
var particle = new Particle();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const username = keys.USERNAME;
const password = keys.PASS;
const authCode = keys.AUTH_CODE;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/client/index.html"));
});


app.post("/api/new", function(req, res) {
  console.log(req.body);
  var action = req.body.action;
  console.log(action);

  res.end()
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// var deviceOneId = keys.ID_ONE;
// var authCode = keys.AUTH_CODE;
// var username = keys.USERNAME;
// var password = keys.PASS;

// var token;

// // particle.login({username: username, password: password}).then(
// //     function(data) {
// //         token = data.body.access_token;
// //         console.log("Log in successful")

// //     },
// //     function (err) {
// //         console.log('Could not log in.', err);
// //     }
// // );


// // function testFunction(){
// //     var fnPr = particle.callFunction({  deviceId: deviceOneId, 
// //                                         name: 'int_fun', 
// //                                         argument: 'wifi_rssi', 
// //                                         auth: authCode });

// //     fnPr.then(
// //         function(data) {
// //             console.log('Function called succesfully:', data);
// //         }, function(err) {
// //             console.log('An error occurred:', err);
// //         }
// //     );
// // }




