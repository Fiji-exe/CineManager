'use strict';

const express = require('express');
const TipoSala = require('../models/tipo-sala.model');
const router = express.Router();

router.post('/registrar-tipo-sala', (req, res) => {

    let nuevoTipoSala = new TipoSala({
        tipoSala: req.body.tipoSala
    });

    console.log(req.body.tipoSala);

    nuevoTipoSala.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el tipo de sala',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de sala registrado con éxito'
            });

        }
    });


});

router.get('/obtener-tipo-sala', (req, res) => {
    TipoSala.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'Fallo la consulta',
                error
            });
        } else {
            res.json({
                msj: 'Sala listada correctamente',
                lista
            });
        }
    });
});

router.get('/obtener-tipo-sala-editar', (req, res) => {
    TipoSala.find({_id: req.query._id}, (error, lista) => {
        if (error) {
            res.json({
                msj: 'Fallo la consulta',
                error
            });
        } else {
            res.json({
                msj: 'Sala listada correctamente',
                lista
            });
        }
    });
});

router.put('/modificar-tipo-sala', (req, res) => {
    let datos = {
        tipoSala: req.body.tipoSala
    }
    TipoSala.updateOne({ _id: req.body._id }, datos, error => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al actualizar el tipo de sala',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de sala se actualizo exitosamente'
            });
        }
    })
});

router.delete('/eliminar-tipo-sala', (req, res) => {

    TipoSala.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al eliminar el tipo de sala',
                error
            });
        } else {
            res.json({
                msj: 'El tipo de sala se elimino exitosamente'
            });
        }
    });
});


module.exports = router;