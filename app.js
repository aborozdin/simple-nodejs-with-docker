const express = require("express");
const app = new express();

app.get("/", function(req, res){
    let message = "Hello, World!";
    res.send(message);  
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});