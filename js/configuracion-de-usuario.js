'use strict';

let fechaact = new Date();
let dia = fechaact.getDate();
let mes = fechaact.getMonth() + 1;
let anno = fechaact.getFullYear();
if (dia < 10) {
    dia = '0' + dia;
}
if (mes < 10) {
    mes = '0' + mes;
}
fechaact = anno + '-' + mes + '-' + dia;


document.getElementById("date-nacimiento").setAttribute("max", fechaact)

const profilePicture = document.querySelector('#foto-perfil');
const nombre1 = document.querySelector('#txt-nombre1');
const nombre2 = document.querySelector('#txt-nombre2');
const apellido1 = document.querySelector('#txt-apellido1');
const apellido2 = document.querySelector('#txt-apellido2');
const numCedula = document.querySelector('#num-cedula');
const tipoCedula = document.querySelector('#tipo-id');
const txtEmail = document.querySelector('#txt-email');
const dateNacimiento = document.querySelector('#date-nacimiento');
const contrasenaActual = document.querySelector('#txt-contraseña-actual');
const nuevaContrasena = document.querySelector('#txt-nueva-contrasena');
const confNuevaContrasena = document.querySelector('#txt-confirmar-contrasena');
const btnGuardar = document.querySelector('#btn-guardar');
const btnEliminar = document.querySelector('#btn-eliminar');
const btnCambiarcontr = document.querySelector('#btn-cambiarcontr');
const btnCambiarImagen = document.querySelector('#btn-cambiar-imagen');



const primerNombre = localStorage.getItem("primerNombre");
const segundoNombre = localStorage.getItem("segundoNombre");
const primerApellido = localStorage.getItem("primerApellido");
const segundoApellido = localStorage.getItem("segundoApellido");
const fechaNacimiento = localStorage.getItem("fechaNacimiento");
const numeroId = localStorage.getItem("numeroId");
const correoUsuario = localStorage.getItem("correoUsuario");
const tipoId = localStorage.getItem("tipoId");

nombre1.value = primerNombre
nombre2.value = segundoNombre
apellido1.value = primerApellido
apellido2.value = segundoApellido
dateNacimiento.value = fechaNacimiento
tipoCedula.value = tipoId
numCedula.value = numeroId
txtEmail.value = correoUsuario


let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'da0h0oymq',
    uploadPreset: 'xfkkawkm'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        profilePicture.src = result.info.secure_url;
    }
});

btnCambiarImagen.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);


const actualizarUsuario = async(pDatos, pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let msj = '';

    await axios({
        method: 'post',
        url: url,
        data: pDatos
    }).then(response => {
        msj = response.data.msj;
    });

    return msj;
};

const validarEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validar = () => {
    let error = false;

    if (!(validarEmail(txtEmail.value))) {
        error = true;
        document.querySelector('.input-box-correo').classList.add('input-error');
    } else {
        document.querySelector('.input-box-correo').classList.remove('input-error');
    }

    if (nombre1.value == '') {
        error = true;
        document.querySelector('.input-box-nombre').classList.add('input-error');
    } else {
        document.querySelector('.input-box-nombre').classList.remove('input-error');
    }

    if (apellido1.value == '') {
        error = true;
        document.querySelector('.input-box-apellido').classList.add('input-error');
    } else {
        document.querySelector('.input-box-apellido').classList.remove('input-error');
    }

    if (numCedula.value == '') {
        error = true;
        document.querySelector('.input-box-compuesto').classList.add('input-error');
    } else {
        document.querySelector('.input-box-compuesto').classList.remove('input-error');
    }

    if (dateNacimiento.value == '') {
        error = true;
        document.querySelector('.input-box-fecha-nacimiento').classList.add('input-error');
    } else {
        document.querySelector('.input-box-fecha-nacimiento').classList.remove('input-error');
    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es invlida',
            'text': 'Por favor revise los campos en rojo',
            'confirmButtonText': 'Entendido'
        });

    } else {
        let datos = {
            foto: profilePicture.src,
            primerNombre: nombre1.value,
            segundoNombre: nombre2.value,
            primerApellido: apellido2.value,
            segundoApellido: dateNacimiento.value,
            fechaNacimiento: dateNacimiento.value,
            numeroId: numCedula.value,
            tipoId: tipoCedula,
            correoUsuario: txtEmail.value,
        }
        actualizarUsuario(datos, '/modificar-cuenta');

        Swal.fire({
            'icon': 'success',
            'title': 'Se ha guardado la informacion.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            //Redireccionamos al homepage de usuario botón del sweet alert
            window.location.href = 'homepage-usuario.html';
        });
    }
};

const eliminar = () => {
    console.log('eliminar');
}
btnGuardar.addEventListener("click", validar);

btnEliminar.addEventListener("click", eliminar);

const validarContr = () => {
    let error = false;

    if (contrasenaActual.value == '') {
        error = true;
        document.querySelector(".input-box-contrasena").classList.add("input-error");
    } else {
        document.querySelector(".input-box-contrasena").classList.remove("input-error");
    }
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Por favor revise los campos en rojo',
            'confirmButtonText': 'Entendido'
        });
    }
}

btnCambiarcontr.addEventListener("click", validarContr);

function edad() {

    let Bdate = document.getElementById('date-nacimiento').value;
    let Bday = +new Date(Bdate);
    let edadTexto = "Edad: " + ~~((Date.now() - Bday) / (31557600000)) + " años";
    let theBday = document.getElementById('resultadoEdad');
    theBday.innerHTML = edadTexto;
}