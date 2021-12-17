'use strict';

const botonForm = document.querySelector('#btn-account-form');

const inputPassword = document.querySelector('#txt-cambiar-password');
const inputPasswordConfirmar = document.querySelector('#txt-confirmar-password');

const validar = () => {
    let error = false;

    //Condicion para validar la contraseña (SOLO VALIDA SI EXISTE)
    if (inputPassword.value == '' || inputPassword.value !== inputPasswordConfirmar.value) {
        error = true;
        document.querySelector(".input-password").classList.add("input-error");
        document.querySelector(".input-password-confirm").classList.add("input-error");
    } else {
        document.querySelector(".input-password").classList.remove("input-error");
        document.querySelector(".input-password-confirm").classList.remove("input-error");
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Por favor complete los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });

    } else {
        console.log("ACC");
        Swal.fire({
            'icon': 'info',
            'title': 'Su contraseña ha sido actualizada',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'homepage-usuario.html';
        });
    }

};


botonForm.addEventListener('click', validar);