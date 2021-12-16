'use strict';

const mongoose = require('mongoose');

let schemaCadena = new mongoose.Schema({
    foto: { type: String, required: false },
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    jefe: { type: String, required: true },
    margen: { type: Number, required: true }
});

module.exports = new mongoose.model('Cadena', schemaCadena, 'cadenas');