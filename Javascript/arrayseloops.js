// Arrays
const lista = ['JavaScript', 20, true];

console.log(lista);

const js = lista[0];
const twenty = lista[1];
const boolean = lista[2];

// Loop
const lista2 = ['JavaScript', 'HTML', 'CSS'];
const body = document.querySelector('body');

for (let index = 0; index < lista2.length; index++) {
    const item = lista2[index];
    body.innerHTML += '<li>' + lista2[index] + '</li>';
}

// ForEach
function adicionarBody(item) {
    body.innerHTML += "<li>" + item + "</li>"
}

lista.forEach(adicionarBody);

function logarItems(item, index) {
    console.log(item, 'no index:', index);
}

lista2.forEach(logarItems);

// você pode escrever a função no argumento:
lista.forEach(function (item, index) {
    console.log(item, 'no index', index);
})

// querySelectorAll
const links = document.querySelectorAll('nav   a');

function logHref(item) {
    const href = item.href;
    console.log(href);
}

links.forEach(logHref);

// Primeiro link
console.log(links[0]);