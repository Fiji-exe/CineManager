'use strict';
const obtenerCartelera = async() => {
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las categorias desde la base de datos',
                'text': `Ocurrio el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerPeliculas = async() => {
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las categorias desde la base de datos',
                'text': `Ocurrio el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerCine = async() => {
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las categorias desde la base de datos',
                'text': `Ocurrio el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerUsuarios = async() => {
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las categorias desde la base de datos',
                'text': `Ocurrio el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerSalas = async() => {
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las categorias desde la base de datos',
                'text': `Ocurrio el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerTiposSalas = async() => {
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las categorias desde la base de datos',
                'text': `Ocurrio el siguiente error ${error}`
            });
        });

    return lista;
};
const obtenerTiposAsientos = async() => {
    let url = `http://localhost:3000/api/obtener-categoria`;
    let lista = [];

    await axios({
            method: 'get',
            url: url

        }).then(response => {
            lista = response.data.lista;
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las categorias desde la base de datos',
                'text': `Ocurrio el siguiente error ${error}`
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
        })
        .catch(error => {
            Swal.fire({
                'icon': 'ERROR',
                'title': 'No se pudo listar las categorias desde la base de datos',
                'text': `Ocurrio el siguiente error ${error}`
            });
        });

    return lista;
};