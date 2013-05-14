var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  controller = require('./controller');

app.configure(function() {
  app.use(express.static('public'));
});

server.listen(3000, function() {
  console.log("listening on 3000");
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.post('/create', controller.create);

io.sockets.on('connection', function(socket) {

  socket.on('update', function(data) {
    console.log(data);
  });

});