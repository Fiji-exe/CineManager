'use strict'

function goHome() {
    window.location = '../html/landing-page.html';
}

function iniciarSesion() {
    window.location = '../html/iniciar-sesion.html';
}

function homeUsuario() {
    window.location = '../html/homepage-usuario.html';
}

function tyc() {
    window.location = '../html/tyc.html';
}

function agregarPelicula() {
    window.location = '../html/agregar-editar-pelicula.html';
}

function buscarLista() {
    window.location = '../html/buscar-listar.html';
}

function perfilCadena() {
    window.location = '../html/perfil-cadena.html';
}

function crearCuenta() {
    window.location = '../html/crear-cuenta.html';
}

function acercaDe() {
    window.location = '/landing-page-equipo/html/landing-page-equipo.html';
}

function comprar() {
    window.location = '../html/flujo-reservas.html';
}

function historial() {
    window.location = '../html/historial-reservas.html';
}

function configUsuario() {
    window.location = '../html/configuracion-de-usuario.html';
}

function registroPago() {
    window.location = '../html/registro-pago.html';
}

function agregarUsuario() {
    window.location = '../html/agregar-usuario-admin.html';
}

function crearCadena() {
    window.location = '../html/crear-editar-cadena.html';
}

function reportes() {
    window.location = '../html/buscar-ver-reportes.html';
}

function editarCartelera() {
    window.location = '../html/editar-carteleras.html';
}

function editarCategoria() {
    window.location = '../html/editar-categorias.html ';
}

function editarSala() {
    window.location = '../html/editar-salas.html';
}

function editarTipoSala() {
    window.location = '../html/editar-tipos-salas.html';
}

function editarTipoAsiento() {
    window.location = '../html/editar-tipos-de-asiento.html';
}

function editarTyc() {
    window.location = '../html/editar-terminos-condiciones.html';
}

function cartelera() {
    window.location = '../html/homepagecarteleras.html';
}



function salir() {
    console.log("salir")
}


const registrarUsuario = async (pDatos, pEndPoint, urlRedireccion) => {
    let url = `http://localhost:3000/api${pEndPoint}`;

    await axios({
        'method': 'post',
        'url': url,
        'data': pDatos
    }).then(res => {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha enviado un correo de validación.',
            'text': res.msj,
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = urlRedireccion;
        });
    }).catch(error => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ha ocurrido un error.',
            'text': `${error}`
        });
    })
};

const listarDatosUsuario = async (pEndPoint, query) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let lista = [];

    await axios ({
        'method': 'get',
        'url': url,
        'params': {
            'correoUsuario': query.correoUsuario
        }
    }).then(res => {
        lista = res.data.lista;
    }).catch(error => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ha ocurrido un error.',
            'text': `${error}`
        });
    })
    return lista;

}

const actualizarUsuario = async (pDatos, pEndPoint, urlRedireccion) => {
    let url = `http://localhost:3000/api${pEndPoint}`;

    await axios({
        'method': 'put',
        'url': url,
        'data': pDatos
    }).then(res => {
        Swal.fire({
            'icon': 'success',
            'title': 'Operacion realizada exitosamente.',
            'text': res.msj
        }).then(() => {
            window.location.href = urlRedireccion;
        }).catch(error => {
            Swal.fire({
                'icon': 'error',
                'title': 'Ha ocurrido un error.',
                'text': `${error}`
            });
        });
    });
}
