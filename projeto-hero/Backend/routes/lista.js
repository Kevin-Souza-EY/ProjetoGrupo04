const express = require('express');

const { body } = require('express-validator');

const listaController = require('../controllers/lista');

const auth = require('.../middleware/auth');

const router = express.Router();

router.get('/',auth, listaController.fetchAll)


router.post(
    '/',
    [
      auth,
      body('id_heroi').trim().isLength({ min: 5}).not().isEmpty(),
      body('username').trim().isLength({ min: 5}).not().isEmpty(),
      body('poderes').trim().isLength({ min: 5}).not().isEmpty(),
      body('universo').isLength({ min: 5}).not().isEmpty(),
    ],
    listaController.listaLista
);

router.delete('/:id_user',auth, listaController.deleteLista);

module.exports = router;