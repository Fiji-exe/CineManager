'use strict';

const obtenerCadena = async(pEndPoint, query) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let lista = [];

    await axios({
        method: 'get', 
        url: url,
        params: {_id: query._id}
    }).then(response => {
        lista = response.data.lista;
    })
    .catch(error => {
        Swal.fire({
            'icon': 'ERROR',
            'title': 'No se pudo listar los contactos',
            'text': `Ocurrio el siguiente error ${error}`
        });
    });
 
    return lista;
};

const obtenerPelicula = async(pEndPoint, query) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let lista = [];

    await axios({
        method: 'get', 
        url: url,
        params: {_id: query._id}
    }).then(response => {
        lista = response.data.peliculas;
    })
    .catch(error => {
        Swal.fire({
            'icon': 'ERROR',
            'title': 'No se pudo listar los contactos',
            'text': `Ocurrio el siguiente error ${error}`
        });
    });
 
    return lista;
};

const obtenerComentariosApi = async(pEndPoint, params) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let lista = [];

    await axios({
        method: 'get',
        url: url, 
        params: params
    }).then(response => {
        lista = response.data.lista;
    })
    .catch(error => {
        Swal.fire({
            'icon': 'ERROR',
            'title': 'No se pudo listar',
            'text': `Ocurrio el siguiente error ${error}`
        });
    });

    return lista;
};

const crearComentarioApi = async(pData, pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let msj = '';

    await axios({
        method: 'post',
        url: url,
        data: pData
    }).then(response => {
        window.location.reload();   
    })
    .catch(error => {
        Swal.fire({
            'icon': 'ERROR',
            'title': 'No se pudo crear el comentario',
            'text': `Ocurrio el siguiente error ${error}`
        });
    });

    return msj;
};