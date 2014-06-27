

var app=require("./app");
var http=require("http");

var server = http.createServer(app).listen(8010, function(){
    console.log("Express listening on port 8000");
});

var io = require('socket.io')(server);

io.on('connection', function(socket){
    socket.on('image',function(img){
    	io.sockets.emit('image',img);
    });
    socket.on('message',function(data){
    	io.sockets.emit('message',data);
    });
});