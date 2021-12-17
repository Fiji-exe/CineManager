'use strict';

const mongoose = require('mongoose');

let schemaCarteleras = new mongoose.Schema({
    nombrePelicula: { type: String, required: true },
    nombreCine: { type: String, required: true },
    idSala: { type: String, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    horaInicio: { type: String, required: true },
    horaFin: { type: String, required: true },
    subtitulos: { type: String, required: true },
    precioBase: { type: Number, required: true }
});

module.exports = new mongoose.model('Cartelera', schemaCarteleras, 'carteleras');