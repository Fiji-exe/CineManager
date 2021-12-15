'use strict'


const leerDatos = async(pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let msj = '';

    await axios({
        method: 'get',
        url: url,

    }).then(response => {
        msj = response.data.lista[0].terminos;
    });

    return msj;
};

const terminosCondiciones = document.getElementById("tyc-body")

let terminos = '';

const cargarDatos = async() => {
    terminos = await leerDatos('/obtener-terminos');
    terminosCondiciones.innerHTML = terminos;
}

cargarDatos();