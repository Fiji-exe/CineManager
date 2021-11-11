const botonCargar = document.querySelector('btn_cargar_imagen');

const subirImagen = () => {
    event.preventDefault();
    document.getElementById('fileid').click();
}

botonCargar.addEventListener('click', subirImagen)