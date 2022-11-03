/* Condicionais */
if (true) { /* Executa */
    console.log('Código executado');
}

if (false) { /* Nunca executa */
    console.log('Não executado');
}

/* If/else */
/* Se a condição do if for falsa, o else que seguir será executado. */
if (false) {
    console.log('Não executado');
} else {
    console.log('Código executado');
}

/* Boolean */
const elemento = document.querySelector('body');

if (elemento) {
    console.log('teste');
}

/* Operadores Lógicos */
// Podemos verificar mais de uma condição com o || (ou) e && (e).
// Todas precisam ser verdadeiras
if (true && false) {
    console.log('Não executa');
}
// Pelo menos uma precisa ser verdadeira
if (true || false) {
    console.log('Executa');
}

/* Operadores de Comparação */
// Podemos comparar os tipos de dados, a comparação retorna um valor booleano.
'JavaScript' === 'javascript'; // false
'20' === 20; // false
30 !== 20; // true;
document.querySelector('.texto') !== null; // false

// Comparar números
10 > 5; // true;
20 < 10; // false;
10 >= 10; // true;
20 <= 30; // true;

const elemento1 = document.querySelector('p');
const texto1 = elemento.innerText;

console.log(texto1);

if (texto1 === 'html') {
    console.log('Executar código');
}