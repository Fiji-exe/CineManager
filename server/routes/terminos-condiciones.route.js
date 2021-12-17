'use strict';

const express = require('express');
const terminosyCondiciones = require('../models/terminos-condiciones.model');
const router = express.Router();


router.post('/registrar-terminos', (req, res) => {
    let nuevosTerminos = new terminosyCondiciones({
        terminos: req.body.terminos
    });

    nuevosTerminos.save( (error) => {
        if(error){

            res.json({
                msj: 'Ocurrio un error al registrar',
                error
            });

        }
        else{
            res.json({
                msj: 'Se registro exitosamente'               
            });
        }
    } );

});

router.get('/obtener-terminos', (req, res) => {
    terminosyCondiciones.find((error, lista) =>{
        if(error){

            res.json({
                msj: 'Fallo la consulta',
                error
            });
        }
        else{

            res.json({
                msj: 'terminos listados correctamente',
                lista
            });
        }
    });
});

router.put('/modificar-terminos', (req, res) => {
    let datos = {
        terminos: req.body.terminos
    }

    terminosyCondiciones.updateOne({_id: req.body._id}, datos, error => {
        if(error){

            res.json({
                msj: 'Ocurrio un error al actualizar',
                error
            });
        }
        else{
            res.json({
                msj: 'Se actualizo exitosamente'               

            });
        }
    })
});

module.exports = router;