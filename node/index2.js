var http = require ("http");
var express = require ("express");
var app = express();
//var server = http.createServer(app);

app.get("/",function(req,res){
    res.send("HELLO APPLE");
    res.end();
    
    
});

server.listen(3000);
app.listn(1234);