const imagens = document.querySelectorAll('#galeria li img');

function galeriaTroca(event) {
    const principal = document.querySelector('#imagem-principal');
    const clicada = event.currentTarget;
    principal.src = clicada.src;
    principal.alt = clicada.alt;
}

function galeriaClique(imagem) {
    imagem.addEventListener('click', galeriaTroca);
}

imagens.forEach(galeriaClique);