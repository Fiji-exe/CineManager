'use strict';


const selectProvincia = document.querySelector('#select-provincia');
const selectCanton = document.querySelector('#select-canton');
const selectDistrito = document.querySelector('#select-distrito');
const txtNumeroTarjeta = document.querySelector('#txt-numero-tarjeta');
const txtMesVencimiento = document.querySelector('#mes-vencimiento');
const txtAnnoVencimiento = document.querySelector('#anno-vencimiento');
const txtCvc = document.querySelector('#cvc');
const txtTitular = document.querySelector('#txt-titular');






const botonForm = document.querySelector('#btn-registrar-pago');




const fillSelectProvincia = () => {
    selectProvincia.innerHTML = "";
    listarProvincias().forEach(provincia => {
        var option = document.createElement("option");
        option.textContent = provincia;
        selectProvincia.appendChild(option);
    });
}


const fillSelectCanton = () => {
    selectCanton.innerHTML = "";
    selectDistrito.innerHTML = "";
    listarCantones(selectProvincia.value).forEach(canton => {
        var option = document.createElement("option");
        option.textContent = canton;
        selectCanton.appendChild(option);
    });
}

const fillSelectDistrito = () => {
    selectDistrito.innerHTML = "";
    listarDistritos(selectProvincia.value, selectCanton.value).forEach(distrito => {
        var option = document.createElement("option");
        option.textContent = distrito;
        selectDistrito.appendChild(option);
    });
}

const validar = () => {
    let error = false;

    if (inputArea.value == '') {
        error = true;

    }

    if(validarTarjeta == false){
        error = true;
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Por favor revise los campos en rojo',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha guardado la informacion.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            // Redireccionamos al dashboard luego de darle click al botón del sweet alert
            // window.location.href = 'dashboard.html';
        });
    }

};

const validarTarjeta = (pNumeroTarjeta) => {
    let amex = new RegExp('^3[47][0-9]{13}$');
    let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
    let cup1 = new RegExp('^62[0-9]{14}[0-9]*$');
    let cup2 = new RegExp('^81[0-9]{14}[0-9]*$');
   
    let mastercard = new RegExp('^5[1-5][0-9]{14}$');
    let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
   
    let disco1 = new RegExp('^6011[0-9]{12}[0-9]*$');
    let disco2 = new RegExp('^62[24568][0-9]{13}[0-9]*$');
    let disco3 = new RegExp('^6[45][0-9]{14}[0-9]*$');
    
    let diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
    let jcb =  new RegExp('^35[0-9]{14}[0-9]*$');
   
    let esValida = true;
   
    if (visa.test(pNumeroTarjeta)) {
      console.log('VISA');
    }
    else if (amex.test(pNumeroTarjeta)) {
        console.log('AMEX');
    }
    else if (mastercard.test(pNumeroTarjeta) || mastercard2.test(pNumeroTarjeta)) {
        console.log('MASTERCARD');
    }
    else if (disco1.test(pNumeroTarjeta) || disco2.test(pNumeroTarjeta) || disco3.test(pNumeroTarjeta)) {
        console.log('DISCOVER');
    }
    else if (diners.test(pNumeroTarjeta)) {
        console.log('DINERS');
    }
    else if (jcb.test(pNumeroTarjeta)) {
        console.log('JCB');
    }
    else if (cup1.test(pNumeroTarjeta) || cup2.test(pNumeroTarjeta)) {
        console.log('CHINA_UNION_PAY');
    }
    else {
        console.log('No se pudo identificar');
        esValida = false;
    }

    return esValida;
}



fillSelectProvincia();
botonForm.addEventListener('click', validar);
selectProvincia.addEventListener('change', fillSelectCanton);
selectCanton.addEventListener('change', fillSelectDistrito);