'use strict';
let stepflag = 1;
let config_total_colums = 9;
let config_total_rows = 7;
let seat_html = '<span class="material-icons chair-button chair-disabled"> <a>chair</a> </span>';

const js_create_seats = (rows, colums) => {
    let tabla = document.getElementById("tabla-asientos")
    for (let i = 0; i < rows; i++) {
        let fila = tabla.insertRow()
        for (let j = 0; j < colums; j++) {
            let celda = fila.insertCell();
            celda.innerHTML = seat_html;
            celda.xpos = `${j}`;
            celda.ypos = `${i}`;
            celda.selected = false;
            /*Agregar evento para clicks
             */
            celda.onclick = function() {
                js_celda_click(this);
            }
        }
    }

}

const js_celda_click = (celda) => {
    if (celda.selected) {
        celda.selected = false;
        celda.style.outline = "0px";
    } else {
        celda.selected = true;
        celda.style.outline = "2px solid #260303";
        console.log(celda.xpos + " " + celda.ypos);
    }



}
const js_go_next_step = () => {
    switch (stepflag) {
        case 1:
            document.getElementsByClassName("section-step-one")[0].style.display = "none";
            document.getElementsByClassName("section-step-two")[0].classList.remove("section-step-inactive");
            document.getElementsByClassName("section-step-two")[0].classList.add("section-step-active");
            js_create_seats(config_total_rows, config_total_colums);
            stepflag = 2;
            break;
        case 2:
            document.getElementsByClassName("section-step-two")[0].style.display = "none";
            document.getElementsByClassName("section-step-three")[0].classList.remove("section-step-inactive");
            document.getElementsByClassName("section-step-three")[0].classList.add("section-step-active");
            stepflag = 3;
            break;
        case 3:
            document.getElementsByClassName("section-step-three")[0].classList.add("section-step-inactive ")
            document.getElementsByClassName("section-step-four")[0].classList.remove("section-step-inactive");
            stepflag = 4;
            break;
        case 4:
            /*redirect user */
    }
}

const js_quant_total_update = () => {
    let value_reg = parseInt(document.getElementById("quant-total-reg").innerHTML, 10);
    let value_kid = parseInt(document.getElementById("quant-total-kid").innerHTML, 10);
    let value_adu = parseInt(document.getElementById("quant-total-adu").innerHTML, 10);
    document.getElementById("quant-total").innerHTML = value_reg + value_kid + value_adu;
}

const js_quant_modifier_click = (modifier) => {
    console.log(document.getElementById("quant-total-reg").value);
    switch (modifier.id) {
        case 'quant-modifier-minus-reg':
            if (parseInt(document.getElementById("quant-total-reg").innerHTML, 10) >= 0) {
                document.getElementById("quant-total-reg").innerHTML = parseInt(document.getElementById("quant-total-reg").innerHTML, 10) - 1;
            }
            break;
        case 'quant-modifier-plus-reg':
            if (parseInt(document.getElementById("quant-total-reg").innerHTML, 10) >= 0) {
                document.getElementById("quant-total-reg").innerHTML = parseInt(document.getElementById("quant-total-reg").innerHTML, 10) + 1;
            }
            break;
        case 'quant-modifier-minus-kid':
            if (parseInt(document.getElementById("quant-total-kid").innerHTML, 10) >= 0) {
                document.getElementById("quant-total-kid").innerHTML = parseInt(document.getElementById("quant-total-kid").innerHTML, 10) - 1;
            }
            break;
        case 'quant-modifier-plus-kid':
            if (parseInt(document.getElementById("quant-total-kid").innerHTML, 10) >= 0) {
                document.getElementById("quant-total-kid").innerHTML = parseInt(document.getElementById("quant-total-kid").innerHTML, 10) + 1;
            }
            break;
        case 'quant-modifier-minus-adu':
            if (parseInt(document.getElementById("quant-total-adu").innerHTML, 10) >= 0) {
                document.getElementById("quant-total-adu").innerHTML = parseInt(document.getElementById("quant-total-adu").innerHTML, 10) - 1;
            }
            break;
        case 'quant-modifier-plus-adu':
            if (parseInt(document.getElementById("quant-total-adu").innerHTML, 10) >= 0) {
                document.getElementById("quant-total-adu").innerHTML = parseInt(document.getElementById("quant-total-adu").innerHTML, 10) + 1;
            }
            break;
    }
    js_quant_total_update();
}

const js_quant_modifier_set_onClick = function(modifier) {
    let array_modifiers = document.getElementsByClassName("quant-modifier");
    Array.from(array_modifiers).forEach(element => {
        element.onclick = function() {
            js_quant_modifier_click(this);
        }
    });

}



js_quant_modifier_set_onClick();
document.getElementById("button-next").onclick = js_go_next_step;