const http = require('http');

const server = http.createServer((req, res) => {
  res.end('esta e minha primeira resposta')
});

server.listen(process.env.PORT || 3000);