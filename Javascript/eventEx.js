const circulo = document.querySelector('#circulo');

function seguirMouse(event) {
    const x = event.x;
    const y = event.y;
    circulo.style.top = y + 'px';
    circulo.style.left = x + 'px';
}

window.addEventListener('mousemove', seguirMouse);

/* Deixando o codigo mais limpo */
/* 
const circulo = document.querySelector('#circulo');

function seguirMouse(eveny) {
    circulo.style.top = event.y + 'px';
    circulo.style.left = event.x + 'px';
}

window.addEventListener('mousemove', seguirMouse);
*/