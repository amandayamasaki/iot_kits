process.stdout.write('\033c');

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var P = require("./routes/particle_scripts");

var server = express();
var PORT = 8000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});


server.post("/api/new", function(req, res) {
    var action = req.body.action;
    var id = req.body.id;
    var myParticle = new P(id);
    myParticle.callFunction(action);
    res.end()
});

server.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});





