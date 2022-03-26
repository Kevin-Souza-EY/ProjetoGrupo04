const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Autorizado');
  if(!authHeader){
    const error = new Error('Não Autenticado');
    error.statusCode = 401;
    throw error;  
  }

  const token = authHeader.split(' ')[1];

  let decodedToken;

  try{
      decodedToken = jwt.verify(token, 'secretfortoken');
  }catch(err){
      err.statusCode = 500;
      throw err;
  }

  if (!decodedToken){
      const error = new Error('Não Autenticado');
      error.statusCode = 401;
      throw error;
  }
  req.isLoggedIn = true;
  req.id_user = decodedToken.id_user;
  req.email = decodedToken.email;
  next();

};