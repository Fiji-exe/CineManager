'use strict';

let usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario.tipoUsuario != '0' && usuario.tipoUsuario != '1') {
    window.location.href = 'homepage-usuario.html';
}

