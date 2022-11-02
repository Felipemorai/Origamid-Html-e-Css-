/* Toggle */
const botao = document.querySelector('.botao');

function mostrar() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativar');
    /* Toggle adicionar caso não existe e se existe ira remover */
}

botao.addEventListener('click', mostrar);

/* Window */
console.log(window);

const larguraTela = window.innerWidth;
const alturaTela = window.innerHeight;

console.log(larguraTela);
console.log(alturaTela);

function coordenadaMouse(event) {
    const coordenadas = {
        x: event.x,
        y: event.y
    }
    console.log(coordenadas);
}

window.addEventListener('mousemove', coordenadaMouse);

function scroll() {
    console.log('Usou o Scroll');
    console.log(window.scrollY);/* Distancia do scroll do topo */
}

window.addEventListener('scroll', scroll);