// 'use strict';


// const txtNombre = document.querySelector('#txt-primer-nombre');
// const txtSegundoNombre = document.querySelector('#txt-segundo-nombre');
// const txtApellido = document.querySelector('#txt-primer-apellido');
// const txtSegundoApellido = document.querySelector('#txt-segundo-apellido');
// const selectTipoId = document.querySelector('#tipo-identificacion');
// const txtIdentificacion = document.querySelector('#txt-numero-id');
// const txtCorreo = document.querySelector('#txt-correo');
// const dateNacimiento = document.querySelector('#date-nacimiento');
// const fileAvatar = document.querySelector('#file-avatar');

// const radioTipoUsuario = document.querySelectorAll('input[name="radio-tipo-usuario"]');
// const btnRegistrar = document.querySelector('#btn-register');



// const validarEmail = (email) => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


// const validar = () => {
//     let error = false;

//     if (txtNombre.value == '') {
//         error = true;
//         document.querySelector('.input-nombre').classList.add('input-error');
//     } else {
//         document.querySelector('.input-nombre').classList.remove('input-error');
//     }

//     // if (txtSegundoNombre.value == '') {
//     //     error = true;
//     //     document.querySelector('.input-segundo-nombre').classList.add('input-error');
//     // }
//     // else {
//     //     document.querySelector('.input-segundo-nombre').classList.remove('input-error');
//     // }

//     if (txtApellido.value == '') {
//         error = true;
//         document.querySelector('.input-apellido').classList.add('input-error');
//     } else {
//         document.querySelector('.input-apellido').classList.remove('input-error');
//     }

//     // if (txtSegundoApellido.value == '') {
//     //     error = true;
//     //     document.querySelector('.input-segundo-apellido').classList.add('input-error');
//     // }
//     // else {
//     //     document.querySelector('.input-segundo-apellido').classList.remove('input-error');
//     // }


//     if (selectTipoId.value == 'Tipo' || txtIdentificacion.value == '') {
//         error = true;
//         document.querySelector('.input-id').classList.add('input-error');
//     } else {
//         document.querySelector('.input-id').classList.remove('input-error');
//     }


//     if (!(validarEmail(txtCorreo.value))) {
//         error = true;
//         document.querySelector('.input-correo').classList.add('input-error');
//     } else {
//         document.querySelector('.input-correo').classList.remove('input-error');
//     }

//     if (dateNacimiento.value == '') {
//         error = true;
//         document.querySelector('.input-nacimiento').classList.add('input-error');
//     } else {
//         document.querySelector('.input-nacimiento').classList.remove('input-error');
//     }



//     if (error == true) {
//         Swal.fire({
//             'icon': 'warning',
//             'title': 'La información introducida es inválida',
//             'text': 'Por favor revise los campos en rojo',
//             'confirmButtonText': 'Entendido'
//         });

//     } else {
//         Swal.fire({
//             'icon': 'success',
//             'title': 'Se ha guardado la información.',
//             'confirmButtonText': 'Entendido'
//         }).then(() => {
//             // Redireccionamos al dashboard luego de darle click al botón del sweet alert
//             // window.location.href = 'dashboard.html';
//         });
//     }
// }

// const radioUsuarioChanged = () => {

//     var radios = document.getElementsByName('radio-tipo-usuario');
//     for (var radio of radios) {
//         if (radio.checked) {
//             if (radio.value == 'Cliente') {
//                 document.querySelector('#div-select-cadena').classList.add('hide');
//             } else {
//                 document.querySelector('#div-select-cadena').classList.remove('hide');
//             }
//         }
//     }

// }

// radioTipoUsuario.forEach(radio => radio.addEventListener('change', radioUsuarioChanged));
// btnRegistrar.addEventListener("click", validar);


'use strict';

const inputNombre = document.querySelector('#txt-nombre');
const inputSegundoNombre = document.querySelector('#txt-segundo-nombre');
const inputApellido = document.querySelector('#txt-apellido');
const inputSegundoApellido = document.querySelector('#txt-segundo-apellido');
const inputFechaNacimiento = document.querySelector('#date-nacimiento');

const selectId = document.querySelector('#select-id');
const inputId = document.querySelector('#txt-id');

const inputCorreo = document.querySelector('#txt-correo');

const radioTipoUsuario = document.querySelectorAll('input[name="radio-tipo-usuario"]');

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
            passwordUsuario: codigoGen,
            tipoUsuario: getTipoDeUsuario(),
            codigoUsuario: codigoGen,
            cuentaVerificada: '0'
        };
       // localStorage.setItem('usuario', JSON.stringify(usuario));
        registrarUsuario(usuario, '/registrar-usuario', 'crear-validar.html');
    }
};

const radioUsuarioChanged = () => {

    var radios = document.getElementsByName('radio-tipo-usuario');
    for (var radio of radios) {
        if (radio.checked) {
            if (radio.value == '2') {
                document.querySelector('#div-select-cadena').classList.add('hide');
            } else {
                document.querySelector('#div-select-cadena').classList.remove('hide');
            }
        }
    }

}


const getTipoDeUsuario = () => {
    var radios = document.getElementsByName('radio-tipo-usuario');
    for (var radio of radios) {
        if (radio.checked) {
            return radio.value;         
        }
    }

}


botonForm.addEventListener('click', validar);
radioTipoUsuario.forEach(radio => radio.addEventListener('change', radioUsuarioChanged));
botonUpload.addEventListener('click', () => { //NEW
    widget_cloudinary.open();
}, false);