'use strict';
const contTabla = document.querySelector('#tabla-historial tbody');

let listaHistorial = [];
let idUsuario = JSON.parse(localStorage.getItem("usuario")).codigoUsuario;

const cargarLista = async() => {
    listaHistorial = await listarHistorial('/listar-facturas', idUsuario);
    mostrarTabla();
}

const mostrarTabla = async() => {
    contTabla.innerHTML = '';
    listaHistorial.forEach(objContacto => {
        let fila = contTabla.insertRow();
        fila.insertCell().innerHTML = objContacto.fecha;
        fila.insertCell().innerHTML = objContacto.locacion_cine;
        fila.insertCell().innerHTML = objContacto.nombre_cine;
        fila.insertCell().innerHTML = objContacto.nombre_peli;
        fila.insertCell().innerHTML = objContacto.tipo_sala;
        fila.insertCell().innerHTML = objContacto.hora_inicio;
        fila.insertCell().innerHTML = objContacto.precio_total;
        fila.insertCell().innerHTML = objContacto.asientos;

    });
};

cargarLista()