'use strict';
const botonIngresar = document.querySelector('#btn-ingresar');
const inputCorreo = document.querySelector('#txt-correo');
const inputContrasenna = document.querySelector('#txt-contrasenna');

const validar = () => {
    let error = false;

    // Condición que valida el correo
    if (inputCorreo.value == '') {
        error = true;
        document.querySelector('.div-correo').classList.add('input-error');
    } else {
        document.querySelector('.div-correo').classList.remove('input-error');
    }

    // Condición que valida la contraseña

    if (inputContrasenna.value == '') {
        error = true;
        document.querySelector('.div-contrasenna').classList.add('input-error');
    } else {
        document.querySelector('.div-contrasenna').classList.remove('input-error');
    }

    // Condición que valida si hay error o no

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'No ha podido iniciar sesión',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        validarCredenciales(inputCorreo.value, inputContrasenna.value);
    }

};


botonIngresar.addEventListener('click', validar);


// Evento click con función anónima
// botonIngresar.addEventListener('click', () => {

//     console.log('Hice click');
//     validar()
// });