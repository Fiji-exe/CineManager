'use strict';

const botonForm = document.querySelector('#btn-account-form');

const inputCorreo = document.querySelector('#txt-correo');
const inputPassword = document.querySelector('#txt-password');

let usuario;

function validarEmail(email) {
    let resultado = false;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    resultado = re.test(email);
    return resultado;
}

const buscarUsuario = async () => {
    usuario = await listarDatosUsuario('/listar-cuenta', {usuarioCorreo: inputCorreo.value});
    validar(usuario[0].correoUsuario, usuario[0].passwordUsuario)
}

const validar = (correo, passw) => {
    let error = false;

    // Condición que valida el correo
    if (validarEmail(inputCorreo.value) && inputCorreo.value == correo) {
        document.querySelector('.input-email').classList.remove('input-error');
    } else {
        error = true;
        document.querySelector('.input-email').classList.add('input-error');
    }

    //Condicion para validar la contraseña
    if (inputPassword.value !== passw) {
        error = true;
        document.querySelector(".input-password").classList.add("input-error");
    } else {
        document.querySelector(".input-password").classList.remove("input-error");
    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Por favor complete los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });

    } else {
        localStorage.setItem('usuario', JSON.stringify(usuario[0]));
        window.location.href = 'homepage-usuario.html';
    }

};


botonForm.addEventListener('click', buscarUsuario);