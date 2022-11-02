/* Metodo */
const curso = {
    nome: 'JavaScript',
    completar() {
        console.log(this.nome);
    },
};

console.log(curso.nome);
curso.completar();

/* Eventos */
const ativar = document.querySelector('.ativar');

/** @param {MouseEvent} event */
function ativarAoClick(event) {
    console.log('Clicou em:', event.currentTarget);
}

/* A função passada é chamada de callback */
ativar.addEventListener('click', ativarAoClick);