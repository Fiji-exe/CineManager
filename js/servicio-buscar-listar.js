'use strict';
let listaCartelera = {
    'id': 'Cartelera ID',
    'pelicula': 'Pelicula',
    'cine': 'Cine',
    'sala': 'Tipo de Sala',
    'diainicia': 'Dia Inicio',
    'diafinaliza': 'Dia Fin',
    'horainicia': 'Hora Inicio',
    'horafinaliza': 'Hora Fin',
}
let listaPeliculas = {
    'nombre': 'Titulo de Película',
    'categoria': 'Categoría Película',
    'sinopsis': 'Sinópsis',
    'duracion': 'Duración (min.)',
    'anno': 'Año',
    'idioma': 'Idioma',
    'subtitulo': 'Subtítulos',
    'Actores': 'Actores',
}
let listaCines = {
    'cadena': 'Nombre de Cadena',
    'ubicacion': 'Ubicación',
    'jefe': 'Jefe Soporte',
    'margen': 'Margen de Ganancia',
}
let listaUsuarios = {
    'primerNombre': 'Primer Nombre',
    'segundoNombre': 'Segundo Nombre',
    'primerApellido': 'Primer Apellido',
    'segundoApellido': 'Segundo Apellido',
    'nacimiento': 'Fecha Nacimiento',
    'tipoUsuario': 'Tipo Cédula',
    'cedula': 'Cédula',
    'correo': 'Correo électronico',
    'tipoU': 'Tipo Usuario',
}
let listaSalas = {
    'codigo': 'Codigo de Sala',
    'cine': 'Cadena de Cine',
    'btotal': 'Butacas Totales',
    'estado': 'Estado de Sala',
    'costo': 'Costo de Sala',
    'tipo': 'Tipo de sala',
}
let listaTipoSala = {
    'nombre': 'Nombre de Tipo de Sala',
}
let listaTipoAsiento = {
    'nombre': 'Nombre de Tipo de Asiento',
}
let listaCategorias = {
    'nombre': 'Nombre de Categoria',
}

const obtenerCartelera = async() => {
    let url = `http://localhost:3000/api//listar-carteleras`;
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
                'icon': 'warning',
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
const obtenerTiposAsientos = async() => {
    let url = `http://localhost:3000/api/obtener-tipo-asiento`;
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