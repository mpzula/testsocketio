var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function( req, res) {
        res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
      console.log('user connected');
      
      io.emit('user joined');
      
      socket.on('disconnect', function() {
            io.emit('user left');
      });
});

http.listen(3000, function() {
        console.log("Listening on port 3000");
});