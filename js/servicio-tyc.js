'use strict'

const terminosCondiciones = document.getElementById("tyc-body")

let terminos = await leerDatos('/obtener-terminos');

terminosCondiciones.innerHTML = terminos;