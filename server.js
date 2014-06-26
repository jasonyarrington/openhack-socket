var app=require("./app");
var http=require("http");
http.createServer(app).listen(8000, function(){
    console.log("Express listening on port 8000");
});