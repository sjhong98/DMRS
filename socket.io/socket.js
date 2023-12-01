var app = require('express')();
var server = require('http').createServer(app);
var tripId = "";
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
});

server.listen(3001, () => {
  console.log('Socket IO server listening on port 3001');
});

// connection event handler
// connection이 수립되면 event handler function의 인자로 socket인 들어온다
io.on('connection', function(socket) {

  // 접속한 클라이언트의 정보가 수신되면
  socket.on('login', (data) => {
    console.log('\n\n===== Client logged-in =====\n email: ' + data.email, data.media);

    // socket에 클라이언트 정보를 저장한다
    socket.email = data.email;
    socket.userid = data.userid;    // socket 블록 내에서만 유효
    socket.tripId = data.tripId;    

    socket.join(data.email, console.log("\n\n" + data.email + " - group created"))
  });

  socket.on('qr-atos', (data) => {
    console.log("\nReceived Data : " + data.email + " / " + data.jwt + " / " + data.name);
    socket.to(data.email).emit('qr-stow', {jwt: data.jwt, name: data.name, email: data.email});
  })



  socket.on('forceDisconnect', function() {
    socket.disconnect();
    socket.leave(socket.tripId);
  })

  socket.on('disconnect', function() {
    console.log('\n\n===== user disconnected =====\n' + socket.email, '\n\n');
    socket.leave(socket.tripId);
  });

});