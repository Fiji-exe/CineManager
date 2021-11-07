'use strict';
let listaUsuarios = [{
    'nombre': 'Pablo Monestel',
    'correo': 'pablo@gmail.com',
    'contrasenna': '123abc',
    'nacimiento': '1987-10-12',
    'edad': 34,
    'foto': '',
    'rol': 1,
    'estado': 1,
    'telefonos': [
        { 'numero': '8888-9766' },
        { 'numero': '9999-9766' }
    ]
}, {
    'nombre': 'Alejandro Coto',
    'correo': 'alejandro@gmail.com',
    'contrasenna': '123abc',
    'nacimiento': '1966-09-01',
    'edad': 55,
    'foto': '',
    'rol': 2,
    'estado': 1,
    'telefonos': [
        { 'numero': '8128-7336' }
    ]
}, {
    'nombre': 'Belén Acuña',
    'correo': 'belen@gmail.com',
    'contrasenna': '123abc',
    'nacimiento': '2000-03-19',
    'edad': 21,
    'foto': '',
    'rol': 3,
    'estado': 1,
    'telefonos': [
        { 'numero': '2234-8865' },
        { 'numero': '2222-1146' },
        { 'numero': '7098-3371' }
    ]
}];

// for (let i = 0; i < listaUsuarios.length; i++) {
//     console.log(`correo: ${listaUsuarios[i].correo} nombre: ${listaUsuarios[i].nombre}`);
// }
const limpiarStorage = () => {
    localStorage.clear();
};

const obtenerNombreRol = (idRol) => {
    let nombreRol = '';

    switch (idRol) {
        case 1:
            nombreRol = 'Administrador';
            break;
        case 2:
            nombreRol = 'Instructor';
            break;
        case 3:
            nombreRol = 'Cliente';
            break;
    }
    return nombreRol;

};

const obtenerNombreEstado = (idEstado) => {
    let nombreEstado = '';

    switch (idEstado) {
        case 1:
            nombreEstado = 'Activo';
            break;
        case 2:
            nombreEstado = 'Inactivo';
            break;
        case 3:
            nombreEstado = 'Pendiente de aprobación';
            break;
        case 4:
            nombreEstado = 'Pendiente de cambio de contraseña';
            break;
    }
    return nombreEstado;
};

const obtenerUsuarios = () => listaUsuarios;

const validarEstado = (estado) => {
    // 1 --> Activo
    // 2 --> Inactivo
    // 3 --> Pendiente de aprobación
    // 4 --> Pendiente de cambio de contraseña

    switch (estado) {
        case 1:
            window.location.href = 'dashboard.html';
            break;
        case 2:
            limpiarStorage();
            Swal.fire({
                'icon': 'info',
                'title': 'No ha podido iniciar sesión',
                'text': 'Su usuario se encuentra inactivo, por favor contacte al administrador'
            });
            break;
        case 3:
            limpiarStorage();
            Swal.fire({
                'icon': 'info',
                'title': 'No ha podido iniciar sesión',
                'text': 'Su usuario se encuentra pendiente de aprobación'
            });
            break;
        case 4:
            limpiarStorage();
            Swal.fire({
                'icon': 'info',
                'title': 'No ha podido iniciar sesión',
                'text': 'Debe realizar el cambio de contraseña'
            }).then(() => {
                window.location.href = 'cambiar-contrasenna.html';
            });
            break;

    }

};

const validarCredenciales = (correo, contrasenna) => {
    let ingresar = false;
    let estado = 0;
    listaUsuarios.forEach(objUsuario => {
        if (objUsuario.correo == correo && objUsuario.contrasenna == contrasenna) {
            estado = objUsuario.estado;
            localStorage.setItem('usuarioConectado', JSON.stringify(objUsuario));
            ingresar = true;
        }
    });

    if (ingresar == false) {
        Swal.fire({
            'icon': 'error',
            'title': 'No ha podido iniciar sesión',
            'text': 'Usuario o contraseña incorrectos'
        });
    } else {
        validarEstado(estado);
    }
};


// listaUsuarios.forEach(objUsuario => {
//     console.log('-------------------')
//     console.log(objUsuario.nombre);
//     console.log(objUsuario.correo);
//     console.log(obtenerNombreRol(objUsuario.rol));
//     console.log(obtenerNombreEstado(objUsuario.estado));

//     console.log('--- Teléfonos: ---');
//     //objUsuario.telefonos[0];

//     objUsuario.telefonos.forEach(objTelefono => {
//         console.log(objTelefono.numero);
//     });
// });