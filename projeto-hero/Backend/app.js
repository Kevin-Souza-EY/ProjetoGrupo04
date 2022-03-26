const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'idranrom123', tittle: ' First server-side name',
    content: 'Caracteristicas do Heroi', power: 'Poderes do Heroi', universe: 'Universo do Heroi'};
  ];
  res.json();
});

module.exports = app;
