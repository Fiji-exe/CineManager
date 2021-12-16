'use strict';

const mongoose = require('mongoose');

let schemaTerminosCondiciones = new mongoose.Schema({
    terminos: { type: String, required: true }
});

module.exports = new mongoose.model('Terminos', schemaTerminosCondiciones, 'terminos');