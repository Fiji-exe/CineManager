'use strict';

const express = require('express');
const cadena = require('../models/cadena.model');
const router = express.Router();

router.post('/registrar-cadena', (req, res) => {
    let nuevaCadena = new cadena({
        nombre:     req.body.nombre,
        ubicacion:  req.body.ubicacion,
        jefe:       req.body.jefe,
        margen:     req.body.margen,
    });

    nuevaCadena.save( (error) => {
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

router.get('/obtener-cadena', (req, res) => {

    cadena.find({_id: req.query._id}, (error, lista) =>{
        if(error){
            res.json({
                msj: 'Fallo la consulta',
                error
            });
        }
        else{
            res.json({
                msj: 'listado correctamente',
                lista
            });
        }
    });
});

router.put('/modificar-cadena', (req, res) => {
    let datos = {
        nombre:     req.body.nombre,
        ubicacion:  req.body.ubicacion,
        jefe:       req.body.jefe,
        margen:     req.body.margen,
    }
    cadena.updateOne({_id: req.body._id}, datos, error => {
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

router.delete('/eliminar-cadena', (req, res) => {
    cadena.deleteOne({_id: req.body._id}, error => {
        if(error){
            res.json({
                msj: 'Ocurrio un error al eliminar ',
                error
            });
        }
        else{
            res.json({
                msj: 'Se elimino exitosamente'               
            });
        }
    });
});

module.exports = router;


