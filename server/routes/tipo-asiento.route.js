'use strict';

const express = require('express');
const TipoAsiento = require('../models/tipo-asiento.model');
const router = express.Router();

router.post('/registrar-tipo-asiento', (req, res) => {

    let nuevoTipoAsiento = new TipoAsiento({
        tipoAsiento: req.body.tipoAsiento,

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
    tipoAsiento.find((error, lista) => {
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
        tipoAsiento: req.body.tipoAsiento
    }
    tipoAsiento.updateOne({ _id: req.body._id }, datos, error => {
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

    tipoAsiento.deleteOne({ _id: req.body._id }, error => {
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