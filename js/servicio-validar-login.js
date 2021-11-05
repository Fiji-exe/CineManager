'use strict';

const botonForm = document.querySelector('#btn-account-form');

const inputCorreo = document.querySelector('#txt-correo');
const inputPassword = document.querySelector('#txt-password');


function validarEmail(email) {
    let resultado = false;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    resultado = re.test(email);
    return resultado;
}

const validar = () => {
    let error = false;

    // Condición que valida el correo
    if (validarEmail(inputCorreo.value)) {
        document.querySelector('.input-email').classList.remove('input-error');
    } else {
        error = true;
        document.querySelector('.input-email').classList.add('input-error');
    }

    //Condicion para validar la contraseña (SOLO VALIDA SI EXISTE)
    if (inputPassword.value == '') {
        error = true;
        document.querySelector(".input-password").classList.add("input-error");
    } else {
        document.querySelector(".input-password").classList.remove("input-error");
    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Por favor complete los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });

    } else {
        console.log("ACC");
    }

};


botonForm.addEventListener('click', validar);
