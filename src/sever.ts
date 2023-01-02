import { server } from './http';
import './websocket/ChatService';

const port = 5000;

server.listen(port, () => console.log(`Sever is running on port: ${port}`));
