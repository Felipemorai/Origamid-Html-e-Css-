function livro(nome, ano , autor) {
    const nomeMaior = nome.toUpperCase();
    const totalAnos = 2050 - ano + ' anos';
    const fraseCompleta = nome + ' por ' + autor;
    const objeto = {
        nome: nomeMaior,
        totalAnos,
        fraseCompleta,
    };
    return objeto;
}

const retorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(retorno.fraseCompleta);