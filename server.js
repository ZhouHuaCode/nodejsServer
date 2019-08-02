
io = require('socket.io')(9000);

io.sockets.on('connection',function(socket){
	console.log("connection");	
});

console.log("game server is listening on 9000");	