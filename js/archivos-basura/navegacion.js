'use strict';

let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));



const mostrarOpciones = () => {
    let itemsMenu = document.querySelectorAll('.header-principal nav a');

    switch (usuarioConectado.rol) {
        case 3:
            itemsMenu[1].classList.add('ocultar');
            itemsMenu[2].classList.add('ocultar');
            break
    }
};

const verificarUsuarioConectado = () => {
    if (usuarioConectado) {
        mostrarOpciones();
    } else {
        Swal.fire({
            'icon': 'info',
            'title': 'Debe realizar el inicio de sesión'
        }).then(() => {
            window.location.href = 'index.html'
        });

    }
};

verificarUsuarioConectado();