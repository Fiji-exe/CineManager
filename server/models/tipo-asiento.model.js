'use strict';

const mongoose = require('mongoose');

let schemaTipoAsiento = new mongoose.Schema({
    TipoAsiento: { type: String, required: true }
});

module.exports = new mongoose.model('TipoAsiento', schemaTipoAsiento, 'tipoasientos');