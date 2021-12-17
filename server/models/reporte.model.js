'use strict';

const mongoose = require('mongoose');

let schemaReporte = new mongoose.Schema({
    tipo_reporte: { type: String, required: true },
    nombre_reporte: { type: String, required: true },
    nombre_eje_x: { type: String, required: true },
    nombre_eje_y: { type: String, required: true },
    vectores: [{
        v_eje_x: { type: String, required: false },
        v_eje_y: { type: String, required: false },
        v_valor: { type: String, required: false },
    }]

});

module.exports = new mongoose.model('Reporte', schemaReporte, 'mongodb-coleccion-reportes');