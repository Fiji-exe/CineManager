'use strict';

const mongoose = require('mongoose');

let schemaSala = new mongoose.Schema({
    tipoSala: { type: String, required: true },
});

module.exports = new mongoose.model('Sala', schemaSala, 'salas');