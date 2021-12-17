'use strict';

const botonForm = document.querySelector('#btn-account-form');

const inputCorreo = document.querySelector('#txt-correo');

let usuario;

function validarEmail(email) {
    let resultado = false;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    resultado = re.test(email);
    return resultado;
}

const buscarUsuario = async () => {
    usuario = await listarDatosUsuario('/listar-cuenta', inputCorreo.value);
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

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Por favor complete los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha enviado un correo de recuperación.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            let codigoGen = 0;
        for (let i = 0; i < 10; i++) {
            const random = Math.random();
            const bit = (random * 16) | 0;
            codigoGen += (bit).toString(16);
        };
        localStorage.setItem('codigoUsuario', codigoGen);
            usuario = {
                passwordUsuario: inputPassword,
                codigoUsuario: codigoGen
            }
            localStorage.setItem('usuario', JSON.stringify(usuario));
            listarDatosUsuario(usuario, '/lsitar-cuenta-recuperar', 'recuperar-validar.html')
        });
    }

};


botonForm.addEventListener('click', buscarUsuario);