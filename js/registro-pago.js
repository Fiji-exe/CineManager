'use strict';


const selectProvincia = document.querySelector('#select-provincia');
const selectCanton = document.querySelector('#select-canton');
const selectDistrito = document.querySelector('#select-distrito');

const txtNumeroTarjeta = document.querySelector('#txt-numero-tarjeta');
const txtMesVencimiento = document.querySelector('#mes-vencimiento');
const txtAnnoVencimiento = document.querySelector('#anno-vencimiento');
const txtCvc = document.querySelector('#cvc');
const txtTitular = document.querySelector('#txt-titular');
const txtDireccion = document.querySelector('#txt-direccion');

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

    if (selectProvincia.value == '' || selectProvincia.value == 'Seleccionar') {
        error = true;
        document.querySelector('.input-provincia').classList.add('input-error');
    } else {
        document.querySelector('.input-provincia').classList.remove('input-error');
    }


    if (selectCanton.value == '' || selectCanton.value == 'Seleccionar') {
        error = true;
        document.querySelector('.input-canton').classList.add('input-error');
    } else {
        document.querySelector('.input-canton').classList.remove('input-error');
    }

    if (selectDistrito.value == '' || selectDistrito.value == 'Seleccionar') {
        error = true;
        document.querySelector('.input-distrito').classList.add('input-error');
    } else {
        document.querySelector('.input-distrito').classList.remove('input-error');
    }


    if (validarTarjeta(txtNumeroTarjeta.value) == false) {
        error = true;
        document.querySelector('.input-tarjeta').classList.add('input-error');
    } else {
        document.querySelector('.input-tarjeta').classList.remove('input-error');
    }

    if (!(txtMesVencimiento.value > 0 && txtMesVencimiento.value <= 12) || txtMesVencimiento.value == '') {
        error = true;
        document.querySelector('.input-mes').classList.add('input-error');
    } else {
        document.querySelector('.input-mes').classList.remove('input-error');
    }


    if (!(txtAnnoVencimiento.value > 2020 && txtAnnoVencimiento.value <= 2030) || txtAnnoVencimiento.value == '') {
        error = true;
        document.querySelector('.input-anno').classList.add('input-error');
    } else {
        document.querySelector('.input-anno').classList.remove('input-error');
    }

    if (!(txtCvc.value > 100 && txtCvc.value <= 9999) || txtCvc.value == '') {
        error = true;
        document.querySelector('.input-cvc').classList.add('input-error');
    } else {
        document.querySelector('.input-cvc').classList.remove('input-error');
    }

    if (txtTitular.value == '') {
        error = true;
        document.querySelector('.input-titular').classList.add('input-error');
    } else {
        document.querySelector('.input-titular').classList.remove('input-error');
    }

    if (txtDireccion.value == '') {
        error = true;
        document.querySelector('.input-direccion').classList.add('input-error');
    } else {
        document.querySelector('.input-direccion').classList.remove('input-error');
    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
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
    let jcb = new RegExp('^35[0-9]{14}[0-9]*$');

    let esValida = true;

    if (visa.test(pNumeroTarjeta)) {
        document.getElementById('img-tipo-tarjeta').src = "/media/visa.png";
    } else if (amex.test(pNumeroTarjeta)) {
        document.getElementById('img-tipo-tarjeta').src = "/media/amex.png";
    } else if (mastercard.test(pNumeroTarjeta) || mastercard2.test(pNumeroTarjeta)) {
        document.getElementById('img-tipo-tarjeta').src = "/media/mastercard.png"
    }
    // else if (disco1.test(pNumeroTarjeta) || disco2.test(pNumeroTarjeta) || disco3.test(pNumeroTarjeta)) {
    //     console.log('DISCOVER');
    // }
    // else if (diners.test(pNumeroTarjeta)) {
    //     console.log('DINERS');
    // }
    // else if (jcb.test(pNumeroTarjeta)) {
    //     console.log('JCB');
    // }
    // else if (cup1.test(pNumeroTarjeta) || cup2.test(pNumeroTarjeta)) {
    //     console.log('CHINA_UNION_PAY');
    // }
    else {
        document.getElementById('img-tipo-tarjeta').src = "";
        esValida = false;
    }

    return esValida;
}

const txtTarjetaTextChange = () => {
    txtNumeroTarjeta.value = txtNumeroTarjeta.value.replace(/\D/g, '');
    if (validarTarjeta(txtNumeroTarjeta.value) == false) {
        document.querySelector('.input-tarjeta').classList.add('input-error');
    } else {
        document.querySelector('.input-tarjeta').classList.remove('input-error');
    }

}



fillSelectProvincia();
botonForm.addEventListener('click', validar);
txtNumeroTarjeta.addEventListener('input', txtTarjetaTextChange);
selectProvincia.addEventListener('change', fillSelectCanton);
selectCanton.addEventListener('change', fillSelectDistrito);