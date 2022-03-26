const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const listaRoutes = require('./routes/lista');

const errorController = require('./controllers/error');

const cors = requiere('core');    

app.use(cors());

const app = express();

const ports = process.env.Port || 3306;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Acess-Control-Allow-Origin', '*');
  res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Acess-Control-Allow-Headers', 'Content-Type, Accept, X-Custom-Header, Authorization');
  if(req.method === 'OPTIONS')
  {
    return res.status(200).end();
  }
  next();
});

app.use('/auth', authRoutes);

app.use('/lista', listaRoutes);


app.use(errorController.get404);

app.use(errorController.get500);


app.listen(ports, () => console.log('Ouvindo porta ${ports}'));
