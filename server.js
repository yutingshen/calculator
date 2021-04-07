const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;
//const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('connection', null);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});
