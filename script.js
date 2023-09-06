const botones = [...document.querySelectorAll('.botones')];
let check = document.getElementById('check');

function ocultarMostrar() {
    check.checked = false;
}

for (let button of botones) {
      button.addEventListener("click", ocultarMostrar, false);    
}