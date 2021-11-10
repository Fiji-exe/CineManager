'use strict';
let stepflag = 1;
let config_total_colums = 12;
let config_total_rows = 5;
let seat_html = '<span class="material-icons chair-button chair-disabled"> <a href="#">chair</a> </span>';

const js_create_seats = (rows, colums) => {
    let tabla = document.getElementById("tabla-asientos")
    for (let i = 0; i < rows; i++) {
        let fila = tabla.insertRow()
        for (let j = 0; j < colums; j++) {
            fila.insertCell().innerHTML = seat_html;
        }
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