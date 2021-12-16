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


const registrarPelicula = async(pDatos) => {
    let url = `http://localhost:3000/api/agregar-pelicula`;

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