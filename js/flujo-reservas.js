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
            /*Agregar evento para clicks
             */
            celda.onclick = function() {
                js_celda_click(this);
            }
        }
    }

}

const js_celda_click = (celda) => {
    console.log(celda);
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
            document.getElementsByClassName("section-step-two")[0].classList.add("section-step-inactive")
            document.getElementsByClassName("section-step-three")[0].classList.remove("section-step-inactive");
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


document.getElementById("button-next").onclick = js_go_next_step;