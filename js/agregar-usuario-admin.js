'use strict';


const txtNombre = document.querySelector('#txt-primer-nombre');
const txtSegundoNombre = document.querySelector('#txt-segundo-nombre');
const txtApellido = document.querySelector('#txt-primer-apellido');
const txtSegundoApellido = document.querySelector('#txt-segundo-apellido');
const selectTipoId = document.querySelector('#tipo-identificacion');
const txtIdentificacion = document.querySelector('#txt-numero-id');
const txtCorreo = document.querySelector('#txt-correo');
const dateNacimiento = document.querySelector('#date-nacimiento');
const fileAvatar = document.querySelector('#file-avatar');

const radioTipoUsuario = document.querySelector('input[name="radio-tipo-usuario"]:checked');
const btnRegistrar = document.querySelector('#btn-register');



const validarEmail = (email) =>  {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validar = () => {
    let error = false;

    if (txtNombre.value == '') {
        error = true;
        document.querySelector('.input-nombre').classList.add('input-error');
    }
    else {
        document.querySelector('.input-nombre').classList.remove('input-error');
    }

    if (txtSegundoNombre.value == '') {
        error = true;
        document.querySelector('.input-segundo-nombre').classList.add('input-error');
    }
    else {
        document.querySelector('.input-segundo-nombre').classList.remove('input-error');
    }

    if (txtApellido.value == '') {
        error = true;
        document.querySelector('.input-apellido').classList.add('input-error');
    }
    else {
        document.querySelector('.input-apellido').classList.remove('input-error');
    }

    if (txtSegundoApellido.value == '') {
        error = true;
        document.querySelector('.input-segundo-apellido').classList.add('input-error');
    }
    else {
        document.querySelector('.input-segundo-apellido').classList.remove('input-error');
    }

    
    if (selectTipoId.value == 'Tipo' || txtIdentificacion.value == '') {
        error = true;
        document.querySelector('.input-id').classList.add('input-error');
    }
    else {
        document.querySelector('.input-id').classList.remove('input-error');
    }

    
    if (!(validarEmail(txtCorreo.value))) {
        error = true;
        document.querySelector('.input-correo').classList.add('input-error');
    }
    else {
        document.querySelector('.input-correo').classList.remove('input-error');
    }

    if (dateNacimiento.value == '') {
        error = true;
        document.querySelector('.input-nacimiento').classList.add('input-error');
    }
    else {
        document.querySelector('.input-nacimiento').classList.remove('input-error');
    }

    if (radioTipoUsuario.value == '') {
        error = true;
        document.querySelector('.input-tipo').classList.add('input-error');
    }
    else {
        document.querySelector('.input-tipo').classList.remove('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Por favor revise los campos en rojo',
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
}


btnRegistrar.addEventListener("click", validar);