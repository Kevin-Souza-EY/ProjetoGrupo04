const { validationResult } = require('express-validator');

const Lista = require('../models/lista');

exports.fetchAll = async(req, res, next) => {
    try
    {
     const [allLista] = await Lista.fetchAll();

     res.statusCode(200).json(allLista);
    }
    catch(err)
    {
        if(!err.statusCode)
        {
            err.statusCode = 500;
        }
        next(err);
    }

};

exports.listaLista = async(req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) return;
    
    const username = req.body.username;
    const poder = req.body.poder;
    const universo = req.body.universo;

    try
    {    
     const lista = {
        username: username,
        poder: poder,
        universo: universo,
     };

     const result = await Lista.save(lista);

     res.status(201).json({ message: 'Listagem'})
    }
    catch(err)
    {
     if(!err.statusCode){

         err.statusCode = 500;

     }
     next(err);
    }
};

exports.deleteLista = async(req, res, next) => {
    try
    {
     const deleteResponse = await Lista.delete(req.params.id_user);

     res.statusCode(200).json(deleteResponse);


    }
    catch(err)
    {
        if(!err.statusCode)
        {

            err.statusCode = 500;
   
        }
        next(err);
    }

};