'use strict';

const registrarCategoriaApi = async(pDatos, pEndPoint) => {
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

const obtenerCategoriaEditar = async(pEndPoint, query) => {
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

const actualizarCategoriaApi = async(pData, pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let msj = '';

    await axios({
        method: 'put',
        url: url,
        data: pData
    }).then(response => {     
        msj = response.msj;       
    })
    .catch(error => {
        Swal.fire({
            'icon': 'ERROR',
            'title': 'No se pudo actualizar',
            'text': `Ocurrio el siguiente error ${error}`
        });
    });

    return msj;
};

const eliminarDatos = async(pId, pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let msj = '';

    await axios({
        method: 'delete',
        url: url,
        data: {
            _id: pId
        }
      
    }).then(response => {
        msj = response.msj;       
    })
    .catch(error => {
        Swal.fire({
            'icon': 'ERROR',
            'title': 'No se pudo eliminar',
            'text': `Ocurrio el siguiente error ${error}`
        });
    });

    return msj;
};