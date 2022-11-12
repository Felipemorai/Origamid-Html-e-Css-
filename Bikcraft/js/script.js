// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = window.location.href;
    const href = link.href;

    if(url.includes(href)) {
        link.classList.add('ativo');
    }

    console.log(url);
    console.log(href);
}

links.forEach(ativarLink);

// Ativar Itens do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(paramentro) {
    const elemento = document.getElementById(paramentro);
    if (elemento) {
        elemento.checked = true;
    };
}

parametros.forEach(ativarProduto);