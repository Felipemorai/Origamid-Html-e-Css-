const botao = document.querySelector('.botao');

function mostrar() {
    const texto = document.querySelector('.texto');
    texto.classList.toggle('ativar');
    /* Toggle adicionar caso não existe e se existe ira remover */
}

botao.addEventListener('click', mostrar);