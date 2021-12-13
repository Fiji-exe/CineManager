'use strict';

const express = require('express');
const Factura = require('../models/factura.model');
const router = express.Router();

router.post('/agregar-factura', (req, res) => {

    let nuevoFactura = new Factura({
        fecha: req.body.fecha,
        locacion_cine: req.body.locacion_cine,
        nombre_cine: req.body.nombre_cine,
        nombre_peli: req.body.nombre_peli,
        tipo_sala: req.body.tipo_sala,
        hora_inicio: req.body.hora_inicio,
        precio_total: req.body.precio_total,
        asientos: req.body.asientos
    });

    nuevoFactura.save(error => {
        if (error) {
            res.json({
                msj: 'ERR <Factura> Route JS: No se pudo agregar-factura',
                error
            });
        } else {
            res.json({
                msj: 'OK <Factura> Route JS: Exito agregar-factura'
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

router.delete('/eliminar-contacto', (req, res) => {});


module.exports = router;