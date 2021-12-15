'use strict';

const express = require('express');
const Factura = require('../models/pelicula.model');
const router = express.Router();

router.post('/agregar-pelicula', (req, res) => {

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
                msj: 'ERR <Pelicula> Route JS: No se pudo agregar-pelicula',
                error
            });
        } else {
            res.json({
                msj: 'OK <Pelicula> Route JS: Exito agregar-pelicula'
            });

        }
    });


});

router.get('/listar-peliculas', (req, res) => {
    contacto.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'ERR <Reporte> Route JS: No se pudo listar-peliculas',
                error
            });
        } else {
            res.json({
                msj: 'OK <Reporte> Route JS: Exito listar-peliculas',
                reportes
            });
        }
    });
});

/*no es necesario editar factura*/
/*router.put('/modificar-reporte', (req, res) => {});*/

router.delete('/eliminar-factura', (req, res) => {});


module.exports = router;