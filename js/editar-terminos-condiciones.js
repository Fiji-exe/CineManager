'use strict';

const botonForm = document.querySelector('#btn-guardar');

const inputArea = document.querySelector('#txt-terminos');


const validar = () => {
    let error = false;

    if (inputArea.value == '') {
        error = true;
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Los terminos y condiciones no pueden estar vacios.',
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


botonForm.addEventListener('click', validar);