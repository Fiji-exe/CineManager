'use strict';

const mongoose = require('mongoose');

let schemaFacturas = new mongoose.Schema({
    fecha: { type: String, required: true },
    locacion_cine: { type: String, required: true },
    nombre_cine: { type: String, required: true },
    nombre_peli: { type: String, required: true },
    tipo_sala: { type: String, required: true },
    hora_inicio: { type: String, required: true },
    precio_total: { type: String, required: true },
    asientos: { type: String, required: true }
});

module.exports = new mongoose.model('Factura', schemaFacturas, 'mongodb-coleccion-facturas');