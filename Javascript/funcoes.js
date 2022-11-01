function logCurso() {
    const nome = 'JavaScript';
    const horas = '40 horas';
    console.log(nome, horas);
}

logCurso();
logCurso();
logCurso();

/* nome e horas são os parâmentros */
function logCursos(nome, horas) {
    console.log(nome, horas, 'horas');
}

/* JavaScript e 40 são os argumentos */
logCursos('Javascript', '40');
logCursos('HTML', '20');
logCursos('CSS', '30');

/* Return */
function logCurso2(nome) {
    console.log(nome);
    return nome + ' Log';
}

const valor = logCurso2('JavaScript');
console.log(valor);

/* Escopo */
const nome1 = 'JavaScript';

function logCurso3() {
    console.log(nome1);
}

/* loga JavaScript */
logCurso3();

function logLivro() {
     const livro = 'O Senhor dos Anéis';
     console.log(livro);
}

logLivro();

/* Erro, pois a constante livro não existe */
console.log(logLivro);