import express from 'express';

const app = express();

const port = 5000;

app.get('/', (request, response) => {
  return response.json({ message: 'Olá Mundo' });
});

app.listen(port, () => console.log(`Sever is running on port: ${port}`));
