'use strict';

const obtenerTerminosEditar = async(pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
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
            'title': 'No se pudo listar los contactos',
            'text': `Ocurrio el siguiente error ${error}`
        });
    });

    return lista;
};

const actualizarTerminos = async(pData, pEndPoint, pReturnUrl) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let msj = '';

    await axios({
        method: 'put',
        url: url,
        data: pData
    }).then(response => {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha actualizado correctamente',
            'text': response.msj
        }).then(() => {
            window.location.reload();
        });
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