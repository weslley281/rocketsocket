import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

const server = createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Socket', socket);
});

app.get('/', (request, response) => {
  return response.json({ message: 'Olá Mundo' });
});

export { server, io };
