var http = require("http");
var server = http.createServer(function(req, res){
    
    res.writeHead(200,{
//        "content-Type": "text/plain"
        "content-Type": "text/html"
    });
//    res.write("HELLO APLLEEEEEE!!!!!");
    res.write("<h1>HELLO APLLEEEEEE!!!!!</h1>");
    res.end();
    

});

server.listen(12345);