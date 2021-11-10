'use strict';
let stepflag = 1;

const js_go_next_step = () => {
    switch (stepflag) {
        case 1:
            document.getElementsByClassName("section-step-one")[0].style.display = "none";
            document.getElementsByClassName("section-step-two")[0].classList.remove("section-step-inactive");
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

const js_apply_display_none = () => {
    let nodes = document.getElementById('ID_of_parent').childNodes;
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.display = "none";
    }
}

document.getElementById("button-next").onclick = js_go_next_step;