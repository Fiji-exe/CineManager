'use strict';

const express = require('express');
const Cartelera = require('../models/carteleras.model');
const router = express.Router();

router.post('/crear-cartelera', (req, res) => {
    let nuevaCartelera = new Cartelera({
        nombreCine: req.body.nombreCine,
        nombrePelicula: req.body.nombrePelicula,
        idCartelera: req.body.idCartelera,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        horaInicio: req.body.horaInicio,
        horaFin: req.body.horaFin,
        idSala: req.body.idSala,
        subtitulos: req.body.subtitulos,
        precioBase: req.body.precioBase
    });

    nuevaCartelera.save((error, cartelera) => {
        if (error) {
            res.json({
                msj: 'ERR <Cartelera> Route JS: No se pudo crear la cartelera.',
                error
            });
        } else {
            res.json({
                msj: '<Cartelera> Route JS: Cartelera creada exitosamente.'
            });
        }
    })
});

router.get('/listar-carteleras', (req, res) => {})

router.put('/modificar-cartelera', (req, res) => {})

router.delete('/borrar-cartelera', (req, res) => {})

module.exports = router;