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




let dataUsuario


dataUsuario = JSON.parse(localStorage.getItem("usuario"));


document.getElementById("date-nacimiento").setAttribute("max", fechaact)

const profilePicture = document.getElementById("foto-perfil");
const nombre1 = document.querySelector('#txt-nombre1');
const nombre2 = document.querySelector('#txt-nombre2');
const apellido1 = document.querySelector('#txt-apellido1');
const apellido2 = document.querySelector('#txt-apellido2');
const numCedula = document.querySelector('#num-cedula');

const txtEmail = document.querySelector('#txt-email');
const dateNacimiento = document.querySelector('#date-nacimiento');
const contrasenaActual = document.querySelector('#txt-contraseña-actual');
const nuevaContrasena = document.querySelector('#txt-nueva-contrasena');
const confNuevaContrasena = document.querySelector('#txt-confirmar-contrasena');
const btnGuardar = document.querySelector('#btn-guardar');
const btnEliminar = document.querySelector('#btn-eliminar');
const btnCambiarcontr = document.querySelector('#btn-cambiarcontr');
const btnCambiarImagen = document.querySelector('#btn-cambiar-imagen');

let codigoUsuario = dataUsuario.codigoUsuario;
let foto = dataUsuario.foto;
let primerNombre = dataUsuario.primerNombre;
let segundoNombre = dataUsuario.segundoNombre;
let primerApellido = dataUsuario.primerApellido;
let segundoApellido = dataUsuario.segundoApellido;
let fechaNacimiento = dataUsuario.fechaNacimiento;
let numeroId = dataUsuario.numeroId;
let correoUsuario = dataUsuario.correoUsuario;




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



const obtenerUsuarioConID = async(query) => {
    let url = `http://localhost:3000/api/listar-cuenta-con-id`;
    let lista = [];

    await axios({
            method: 'get',
            url: url,
            params: { _id: query._id }
        }).then(response => {
            lista = response.data.lista;
        })
        .catch(error => {
            Swal.fire({
                'icon': 'warning',
                'title': 'No se pudo obtner datos del usuario',
                'text': `Ocurrio el siguiente error ${error}`
            });
        });

    return lista;
};

const checar_edit = (id) => {
    if (localStorage.getItem("_id")) {
        let userID = localStorage.getItem("_id");
        console.log(userID)
        dataUsuario = edit_otro_usuario(userID)
    } else {

    }
    id = JSON.parse(id)
    obtenerUsuarioConID({ _id: id }).then((res) => { console.log(res) })
}

const rellenar_inputs = (dataUsuario) => {
    codigoUsuario = dataUsuario.codigoUsuario;
    foto = dataUsuario.foto;
    primerNombre = dataUsuario.primerNombre;
    segundoNombre = dataUsuario.segundoNombre;
    primerApellido = dataUsuario.primerApellido;
    segundoApellido = dataUsuario.segundoApellido;
    fechaNacimiento = dataUsuario.fechaNacimiento;
    numeroId = dataUsuario.numeroId;
    correoUsuario = dataUsuario.correoUsuario;

    profilePicture.src = foto
    nombre1.value = primerNombre
    nombre2.value = segundoNombre
    apellido1.value = primerApellido
    apellido2.value = segundoApellido
    dateNacimiento.value = fechaNacimiento
    numCedula.value = numeroId
    txtEmail.value = correoUsuario

}





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
            'title': 'La información introducida es inválida',
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
            correoUsuario: txtEmail.value
        }
        actualizarUsuario(datos, '/modificar-cuenta', 'homepage-usuario.html')


    }

};

const eliminarDatos = () => {


    Swal.fire({
        title: '¿Está seguro de eliminar?',
        text: "Una vez eliminado no hay forma de revertirlo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {

            eliminarUsuario(codigoUsuario, '/borrar-cuenta');
            Swal.fire({
                'icon': 'success',
                'title': 'Se ha eliminado el usuario.',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                //Redireccionamos al dashboard luego de darle click al botón del sweet alert
                window.location.href = 'homepage-usuario.html';
            });
        }
    });

}

btnGuardar.addEventListener("click", validar);

btnEliminar.addEventListener("click", eliminarDatos);

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
    } else {
        let datos = {

            passwordUsuario: nuevaContrasena.value

        }
        actualizarUsuario(datos, '/modificar-cuenta', 'homepage-usuario.html')
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

edad();
checar_edit();