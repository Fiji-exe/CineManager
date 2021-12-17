'use strict';

const inputNombre = document.querySelector('#txt-nombre');
const inputSegundoNombre = document.querySelector('#txt-segundo-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inputSegundoApellido = document.querySelector('#txt-segundo-apellido');
const inputFechaNacimiento = document.querySelector('#date-nacimiento');

const selectId = document.querySelector('#select-id');
const inputId = document.querySelector('#txt-id');

const inputCorreo = document.querySelector('#txt-correo');
const inputPassword = document.querySelector('#txt-password');
const inputPasswordConfirm = document.querySelector('#txt-password-confirmar');

const botonForm = document.querySelector('#btn-account-form');

const botonUpload = document.querySelector('#btn-upload-foto'); //NEW
let foto_url; //NEW

let widget_cloudinary = cloudinary.createUploadWidget({ //NEW
    cloudName: 'da0h0oymq',
    uploadPreset: 'xfkkawkm'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        botonUpload.disabled = true;
        document.getElementsByClassName('input-container')[0].innerHTML = `<label> Foto subida con éxito</label> `
        foto_url = result.info.secure_url;
    }
});

function validarEmail(email) {
    let resultado = false;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    resultado = re.test(email);
    return resultado;
}

const validar = () => {
    let error = false;

    //Condicion para validar Nombre
    if (inputNombre.value == '') {
        document.querySelector(".input-name").classList.add("input-error");
        error = true;
    } else {
        document.querySelector(".input-name").classList.remove("input-error");
    }

    //Condicion para validar Apellido
    if (inputApellido.value == '') {
        document.querySelector(".input-surname").classList.add("input-error");
        error = true;
    } else {
        document.querySelector(".input-surname").classList.remove("input-error");
    }

    //Condicion para validar Apellido
    if (inputId.value == '') {
        document.querySelector(".input-idnum").classList.add("input-error");
        error = true;
    } else {
        document.querySelector(".input-idnum").classList.remove("input-error");
    }

    // Condición que valida el correo
    if (validarEmail(inputCorreo.value)) {
        document.querySelector('.input-email').classList.remove('input-error');

    } else {
        error = true;
        document.querySelector('.input-email').classList.add('input-error');
    }

    //Condicion para validar la contraseña (SOLO VALIDA SI ES IGUAL A LA CONFIRMACION)
    if (inputPassword.value == '' || inputPassword.value !== inputPasswordConfirm.value) {
        error = true;
        document.querySelector(".input-password").classList.add("input-error");
        document.querySelector(".input-password-confirm").classList.add("input-error");
    } else {
        document.querySelector(".input-password").classList.remove("input-error");
        document.querySelector(".input-password-confirm").classList.remove("input-error");
    }

    if (error) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Por favor complete los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });
    } else {
        let codigoGen = 0;
        for (let i = 0; i < 10; i++) {
            const random = Math.random();
            const bit = (random * 16) | 0;
            codigoGen += (bit).toString(16);
        };
        localStorage.setItem('codigoUsuario', codigoGen);

        let usuario = {
            foto: foto_url, //NEW
            primerNombre: inputNombre.value,
            segundoNombre: inputSegundoNombre.value,
            primerApellido: inputApellido.value,
            segundoApellido: inputSegundoApellido.value,
            fechaNacimiento: inputFechaNacimiento.value,
            tipoId: selectId.value,
            numeroId: inputId.value,
            correoUsuario: inputCorreo.value,
            passwordUsuario: inputPassword.value,
            tipoUsuario: '0',
            codigoUsuario: codigoGen,
            cuentaVerificada: '0'
        };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        registrarUsuario(usuario, '/registrar-usuario', 'crear-validar.html');
    }

};


botonForm.addEventListener('click', validar);

botonUpload.addEventListener('click', () => { //NEW
    widget_cloudinary.open();
}, false);