var keys = require('./../keys.json');
var Particle = require('particle-api-js');
var particle = new Particle();

var deviceOneId = keys.ID_ONE;
var authCode = keys.AUTH_CODE;
var username = keys.USERNAME;
var password = keys.PASS;

var token;

const username = keys.USERNAME;
const password = keys.PASS;
const authCode = keys.AUTH_CODE;

// particle.login({username: username, password: password}).then(
//     function(data) {
//         token = data.body.access_token;
//         console.log("Log in successful")

//     },
//     function (err) {
//         console.log('Could not log in.', err);
//     }
// );


// function testFunction(){
//     var fnPr = particle.callFunction({  deviceId: deviceOneId, 
//                                         name: 'int_fun', 
//                                         argument: 'wifi_rssi', 
//                                         auth: authCode });

//     fnPr.then(
//         function(data) {
//             console.log('Function called succesfully:', data);
//         }, function(err) {
//             console.log('An error occurred:', err);
//         }
//     );
// }