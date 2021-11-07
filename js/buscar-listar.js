'use strict';
let listaUsuarios = [{
    'nombre': 'Pablo Monestel',
    'correo': 'pablo@gmail.com',
    'contrasenna': '123abc',
    'nacimiento': '1987-10-12',
    'edad': 34,
    'foto': '',
    'rol': 1,
    'estado': 1,
    'telefonos': [
        { 'numero': '8888-9766' },
        { 'numero': '9999-9766' }
    ]
}, {
    'nombre': 'Alejandro Coto',
    'correo': 'alejandro@gmail.com',
    'contrasenna': '123abc',
    'nacimiento': '1966-09-01',
    'edad': 55,
    'foto': '',
    'rol': 2,
    'estado': 1,
    'telefonos': [
        { 'numero': '8128-7336' }
    ]
}, {
    'nombre': 'Belén Acuña',
    'correo': 'belen@gmail.com',
    'contrasenna': '123abc',
    'nacimiento': '2000-03-19',
    'edad': 21,
    'foto': '',
    'rol': 3,
    'estado': 1,
    'telefonos': [
        { 'numero': '2234-8865' },
        { 'numero': '2222-1146' },
        { 'numero': '7098-3371' }
    ]
}];

const obtenerUsuarios = () => listaUsuarios;

const cuerpoTabla = document.querySelector('#tabla-uno');
let lista = obtenerUsuarios();

const mostrarTabla = () => {
    lista.forEach(objUsuario => {
        let fila = cuerpoTabla.insertRow();
        fila.insertCell().innerHTML = '';
        fila.insertCell().innerHTML = objUsuario.nombre;
        fila.insertCell().innerHTML = objUsuario.correo;
        fila.insertCell().innerHTML = objUsuario.nacimiento;

        fila.insertCell().innerHTML = objUsuario.edad;
        let celdaTelefonos = fila.insertCell();
        // Crear un párrafo para cada teléfono
        objUsuario.telefonos.forEach(objTelefono => {
            let parrafoTelefono = document.createElement('p');
            parrafoTelefono.innerHTML = objTelefono.numero;

            // Agrega el párrafo de teléfono como hijo de la celda
            celdaTelefonos.appendChild(parrafoTelefono);
        });

        fila.insertCell().innerHTML = obtenerNombreRol(objUsuario.rol);
        fila.insertCell().innerHTML = obtenerNombreEstado(objUsuario.estado);
    });
};


document.getElementById("boton-buscar-filtros").onclick = mostrarTabla;