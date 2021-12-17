'use strict';

let usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario.tipoUsuario != '1' && usuario.tipoUsuario != '2') {
    window.location.href = 'homepage-usuario.html';
}

