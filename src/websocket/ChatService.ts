import { io } from '../http';

io.on('connect', (socket) => {
  socket.emit('chat iniciado', { message: 'Seu chat foi iniciado' });
});
