'use strict';

const express = require('express');
const TipoAsiento = require('../models/tipo-asiento.model');
const router = express.Router();

router.post('/registrar-tipo-asiento', (req, res) => {

    let nuevoTipoAsiento = new TipoAsiento({
        TipoAsiento: req.body.TipoAsiento,

    });

    nuevoTipoAsiento.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el tipo de asiento',
                error
            });
        } else {
            res.json({
                msj: 'Tipo de asiento registrado con éxito'
            });

        }
    });


});

router.get('/obtener-tipo-asiento', (req, res) => {
    TipoAsiento.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'Fallo la consulta',
                error
            });
        } else {
            res.json({
                msj: 'Tipo de asiento listada correctamente',
                lista
            });
        }
    });
});

router.get('/obtener-tipo-asiento-editar', (req, res) => {
    TipoAsiento.find({_id: req.query._id},(error, lista) => {
        if (error) {
            res.json({
                msj: 'Fallo la consulta',
                error
            });
        } else {
            res.json({
                msj: 'Tipo de asiento listada correctamente',
                lista
            });
        }
    });
});

router.put('/modificar-tipo-asiento', (req, res) => {
    let datos = {
        TipoAsiento: req.body.TipoAsiento
    }
    TipoAsiento.updateOne({ _id: req.body._id }, datos, error => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al actualizar el tipo de asiento',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de asiento se actualizo exitosamente'
            });
        }
    })
});

router.delete('/eliminar-tipo-asiento', (req, res) => {

    TipoAsiento.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al eliminar el tipo de asiento',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de asiento se elimino exitosamente'
            });
        }
    });
});


module.exports = router;