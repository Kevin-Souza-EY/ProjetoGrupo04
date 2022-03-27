const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
    id: 'idranrom123',
    tittle: 'Primeira entrada NOME',
    content: 'Caracteristicas do Heroi',
    power: 'Poderes do Heroi',
    universe: 'Universo do Heroi'
  },
  {
  id: 'idranrom456',
  tittle: 'Segunda entrada NOME',
  content: 'Caracteristicas do Heroi',
  power: 'Poderes do Heroi',
  universe: 'Universo do Heroi.'
}
  ];
  res,status(200).json({
    message: 'Heroi cadastrado com SUCESSO!!',
    posts: posts
  });
});

module.exports = app;
