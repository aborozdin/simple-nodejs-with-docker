const express = require("express");
const app = new express();

app.get("/", function(req, res){
    res.send("Hello, World! This is a simple express app.");
});

const PORT = 8080;
const server = app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});