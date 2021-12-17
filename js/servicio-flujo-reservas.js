'use strict'

//todo
//get cartelera info
// // Cine Locacion, Cine Nombre, Peli Nombre
// // Tipo de sala, hora inicio, precio entrada
// // asientos disponibles

//get sala info
// // size
// // seats location
// // seats type

//get user payments
// // card type
// // card last 4 digits

//put factura
// // Cine Locacion, Cine Nombre, Peli Nombre
// // Tipo de sala, hora inicio, precio entrada
// // asientos comprados
// // fecha
// // Precio total

const registrarFactira = async(pDatos) => {
    let url = `http://localhost:3000/api/agregar-factura`;

    await axios({
        'method': 'post',
        'url': url,
        'data': pDatos
    }).then(res => {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha registrado la factura.',
            'text': res.msj,
            'confirmButtonText': 'Entendido'
        });
    }).catch(error => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ha ocurrido un error registrando la factura.',
            'text': `${error}`
        });
    })
};