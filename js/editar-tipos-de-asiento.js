'use strict';

const botonAdd = document.querySelector('#btn-add');
const botonRemove = document.querySelector('#btn-remove');

const inputArea = document.querySelector('#txt-categoria');


const validar = () => {
    let error = false;

    if (inputArea.value == '') {
        error = true;
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Tipo de asiento no puede estar vacio.',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha guardado la informacion.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            // Redireccionamos al dashboard luego de darle click al botón del sweet alert
            // window.location.href = 'dashboard.html';
        });
    }

};


botonAdd.addEventListener('click', validar);
botonRemove.addEventListener('click', validar);