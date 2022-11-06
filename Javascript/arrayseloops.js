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