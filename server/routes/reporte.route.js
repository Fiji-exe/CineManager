'use strict';

const express = require('express');
const Reporte = require('../models/reporte.model');
const router = express.Router();

router.post('/agregar-reporte', (req, res) => {

    let nuevoReporte = new Reporte({
        tipo_reporte: req.body.tipo_reporte,
        nombre_reporte: req.body.nombre_reporte,
        nombre_eje_x: req.body.nombre_eje_x,
        nombre_eje_y: req.body.nombre_eje_y,
        vectores: req.body.vectores
    });

    nuevoReporte.save(error => {
        if (error) {
            res.json({
                msj: 'ERR <Reporte> Route JS: No se pudo agregar-reporte',
                error
            });
        } else {
            res.json({
                msj: 'OK <Reporte> Route JS: Exito agregar-reporte'
            });

        }
    });


});

router.get('/listar-reportes', (req, res) => {
    contacto.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'ERR <Reporte> Route JS: No se pudo listar-reportes',
                error
            });
        } else {
            res.json({
                msj: 'OK <Reporte> Route JS: Exito listar-reportes',
                reportes
            });
        }
    });
});

router.put('/modificar-reporte', (req, res) => {});

router.delete('/eliminar-reporte', (req, res) => {});


module.exports = router;