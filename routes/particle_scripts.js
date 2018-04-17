var keys = require('./../keys.json');
var Particle = require('particle-api-js');

const username = keys.USERNAME;
const password = keys.PASS;
const authCode = keys.AUTH_CODE;

var P = function(id){
	this.callFunction = function(funct){
		var particle = new Particle();
		var token;

		particle.login({username: username, password: password}).then(
	    function(data) {
	        token = data.body.access_token;
	        console.log("device : " + id + "  |  action : " + funct);
	        console.log(authCode);
	     //    var fnPr = particle.callFunction({  deviceId: id, 
		    //                                     name: 'int_fun', 
		    //                                     argument: 'wifi_rssi', 
		    //                                     auth: authCode });

		    // fnPr.then(
		    //     function(data) {
		    //         console.log('Function called succesfully:', data);
		    //     }, function(err) {
		    //         console.log('An error occurred:', err);
		    //     }
		    // );
	    },
	    function (err) {
	        console.log('Could not log in.', err);
	    }); 
	}
};

module.exports = P;