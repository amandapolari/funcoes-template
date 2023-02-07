function verificarMaioridade(nome, anoDeNascimento, anoAtual){
    const idade = anoAtual - anoDeNascimento;
    const ehMaior = idade >= 18

    const frase = `${nome} é maior de idade? ${ehMaior}`

    return frase;
}

const pessoa1 = verificarMaioridade('Amanda', 1995, 2023);
console.log(pessoa1)

const pessoa2 = verificarMaioridade('Luan', 1990, 2023 );
console.log(pessoa2)

const pessoa3 = verificarMaioridade('Fátima', 1964, 2023 );
console.log(pessoa3)

const pessoa4 = verificarMaioridade('Samuel', 2007, 2023 );
console.log(pessoa4)
