const registrarPelicula = async(pDatos, pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;

    await axios({
        'method': 'post',
        'url': url,
        'data': pDatos
    }).then(res => {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha registrado la película.',
            'text': res.msj,
            'confirmButtonText': 'Entendido'
        });
    }).catch(error => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ha ocurrido un error registrando la película.',
            'text': `${error}`
        });
    })
};