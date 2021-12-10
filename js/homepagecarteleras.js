'use strict';
let fechaact = new Date();
let dia = fechaact.getDate();
let mes = fechaact.getMonth() + 1;
let anno = fechaact.getFullYear();
if (dia < 10) {
    dia = '0' + dia;
}
if (mes < 10) {
    mes = '0' + mes;
}
fechaact = anno + '-' + mes + '-' + dia;


document.getElementById("date-nacimiento").setAttribute("min", fechaact)

function buscarLista() {
    let visual = document.getElementById('step-two')
    let noVisual = document.getElementById('step-one')
    visual.style.visibility = 'visible';
    noVisual.style.visibility = 'invisible';
    console.log('test')
}