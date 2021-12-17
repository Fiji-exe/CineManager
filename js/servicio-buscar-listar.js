'use strict';
let listaCartelera = {
    'id': 'Codigo Cartelera',
    'pelicula': 'Pelicula',
    'cine': 'Cine',
    'sala': 'Tipo de Sala',
    'inicia': 'Hora Inicio',
    'finaliza': 'Hora Fin'
}
let listaPeliculas = {
    'titulo': 'Titulo de Pelicula',
    'imagen': 'Poster',
    'duracion': 'Duracion (min.)',
    'categoria': 'Categoria Pelicula',
    'sinopsis': 'Sinopsis',
    'idioma': 'Idioma',
    'subtitulo': 'Subtitulos',
    'perfil': 'Perfil'
}
let listaCines = {
    'cadena': 'Nombre de Cadena',
    'codigo': 'Codigo de Cadena',
    'ubicacion': 'Ubicacion',
    'margen': 'Margen de Ganancia',
    'perfil': 'Perfil de Cadena'
}
let listaUsuarios = {
    'nombre': 'Nombre de Usuario',
    'correo': 'Correo Electronico',
    'nacimiento': 'Fecha Nacimiento',
    'edad': 'Edad',
    'avatar': 'Avatar',
    'rol': 'Tipo de Usuario',
    'estado': 'Estado de Cuenta'
}
let listaSalas = {
    'codigo': 'Codigo de Sala',
    'cine': 'Cadena de Cine',
    'btotal': 'Butacas Totales',
    'estado': 'Estado de Sala',
    'costo': 'Costo de Sala',
    'tipo': 'Tipo de sala',
    'editar': 'Editar'
}
let listaTipoSala = {
    'nombre': 'Nombre de Tipo de Sala',
    'editar': 'Ir a editar'
}
let listaTipoAsiento = {
    'nombre': 'Nombre de Tipo de Asiento',
    'editar': 'Ir a editar'
}
let listaCategorias = {
    'nombre': 'Nombre de Categoria',
    'editar': 'Ir a editar'
}

const obtenerCartelera = async() => { // PENDING
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
            lista.unshift(listaCartelera);
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las carteleras desde la base de datos',
                'text': ` Ocurrió el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerPeliculas = async() => {
    let url = `http://localhost:3000/api/listar-peliculas`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
            lista.unshift(listaPeliculas);
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las películas desde la base de datos',
                'text': ` Ocurrió el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerCine = async() => {
    let url = `http://localhost:3000/api/obtener-cadena`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
            lista.unshift(listaCines);
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las cadenas de cine desde la base de datos',
                'text': ` Ocurrió el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerUsuarios = async() => {
    let url = `http://localhost:3000/api/listar-cuenta`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
            lista.unshift(listaUsuarios);
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar los usuarios desde la base de datos',
                'text': ` Ocurrió el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerSalas = async() => { // PENDING
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
            lista.unshift(listaSalas);
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las salas la base de datos',
                'text': ` Ocurrió el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerTiposSalas = async() => {
    let url = `http://localhost:3000/api/obtener-tipo-sala`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
            lista.unshift(listaTiposSalas);
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar los tipos de salas desde la base de datos',
                'text': ` Ocurrió el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerTiposAsientos = async() => { // PENDING
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
            lista.unshift(listaTipoAsiento);
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar los tipos de asiento desde la base de datos',
                'text': ` Ocurrió el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerCategorias = async() => {
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
            lista.unshift(listaCategorias);
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las categorias desde la base de datos',
                'text': ` Ocurrió el siguiente error ${error}`
            });
        });

    return lista;
};