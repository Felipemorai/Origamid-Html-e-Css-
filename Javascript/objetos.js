const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R. Tolkien";

const nomeFilme = "O Senhor dos Anéis";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

const livro = {
    nome: "O Senhor dos Anéis",
    ano: 1954,
    autor: "J. R. R. Tolkien"
}

const filme = {
    nome: "O Senhor dos Anéis",
    ano: 2001,
    autor: "J. R. R. Tolkien",
    diretor: "Peter Jackson"
}

console.log(livro.nome + " " + filme.diretor);

/* Tudo é Objeto */
console.dir(console);

const nomes = "O senhor dos Anéis";
const nomeMaiusculo = nomes.toUpperCase();
const totalLetras = nomes.length;

console.log(nomeMaiusculo);
console.log(totalLetras);

const preco = 2.99;
const precoArredondado = 'R$ ' + preco.toFixed();

console.log(precoArredondado);

const texto = document.querySelector('p');

console.log(texto.innerHTML);
console.log(texto.clientHeight);

console.log(autor.length);
console.log(autor.toUpperCase());
console.log(autor.toLowerCase());