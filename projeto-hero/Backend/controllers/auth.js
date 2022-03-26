const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


exports.cadastro = async(req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) return
    
    const username = req.body.username;
    const email = req.body.email;
    const psw = req.body.psw;

    try
    {
     const hashedSenha = await bcrypt.hash(psw, 12) 
    
     const usernameDetalhes = {
         username: username,
         email: email,
         psw: hashedSenha,
     };

     const result = await User.save(usernameDetalhes);

     res.status(201).json({ message: 'Usuario Registrado'})
    }
    catch(err)
    {
     if(!err.statusCode){

         err.statusCode = 500;

     }
     next(err)
    }
};

exports.login = async(req, res, next) => {
 const email = req.body.email;
 const psw = req.body.psw;
 
 try
 {
   const username = await User.find(email);

   if(username[0].length !== 1)
   {
     const error = new Error ('Usuario com esse email não encontrado');
     error.statusCode = 401;
     throw error;
   }

   
   const storedUsuario = username[0][0];

   const isEqual = await bcrypt.compare(psw, storedUsuario.psw);

   if (!isEqual){
       const error = new Error('Senha Errada');
       error.statusCode = 401;
       throw error;
   }

   const token = jwt.sign(
   {
     email: storedUsuario.email,
     id_user: storedUsuario.id_user
   },
   'secretfortoken',
   { expiresIn: '1h'}
   );
   res.status(200).json({ token: token, id_user: storedUsuario.id_user});
 } catch(err)
 {
  if(!err.statusCode){

      err.statusCode = 500;
  }
  next(err)
 }
};