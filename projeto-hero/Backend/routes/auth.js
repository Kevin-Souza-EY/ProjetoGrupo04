const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('.../controllers/auth');


router.post(
    '/cadastro',
    [
      body('username').trim().not().isEmpty(),
      body('email').isEmail().withMessage('Por Favor Entre com um email valido')
      .custom(async(email) => {
          const username = await User.find(email);
          if(username[0].length > 0)
          {
            return Promise.reject('Email já existe');
          }
      })
      .normalizeEmail(),
      body('psw').trim().isLength({min: 7}),
    ],
    authController.cadastro
);

router.post('/login', authController.login);

module.exports = router;