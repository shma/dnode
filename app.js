var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;

app.get('/', function(req, res){
	  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on('msg', function(msg){
    console.log(msg);

    io.emit('msg', msg);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
