const botao = document.querySelector('button');

function somar() {
    const div = document.querySelector('div');
    const total = Number(div.innerText) + 1;
    const estoque = 10;
    if (total < estoque) {
        div.innerText = total;
    } else {
        console.log('Não é possivel adicionar mais');
    }
}

if (botao) {
    botao.addEventListener('click', somar);
}