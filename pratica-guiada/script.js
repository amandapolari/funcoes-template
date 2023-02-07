// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

function darOlaPessoa(nome){
    const frase = `Olá, ${nome}!`
    console.log(frase);
}
// darOlaPessoa('Amanda');
// darOlaPessoa('Easley');
// darOlaPessoa('Naive');

//Declarando a mesma função, em arrow function:
const darOlaPessoaExtra = () => {
    const frase = `Olá, ${nome}!`
    console.log(frase);
}
// darOlaPessoa('JS');
// darOlaPessoa('Futura fonte de renda');
// darOlaPessoa('Coisinha difícil mas gratificante');

// Prática Guiada II
function operarNumero(numero) {
    // Verifica paridade
    const ehPar = (numero % 2) === 0;
    // console.log(ePar);

    // soma com 10
    const soma = numero + 10;

    // Multiplica por ele mesmo
    const multiplica = numero * numero;

    // Retornar a string:
    const frase = `O número ${numero} é par? ${ehPar}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é  ${multiplica}`

    // retornando:
    return frase
}

// console.log(operarNumero(4));
// console.log(operarNumero(5));
// console.log(operarNumero(12));

// Extra 1
// O que a gente cria dentro da função a gente não consegue usar fora.
// console.log(soma)

// Extra 2
const operarNumeroExtra = function(numero){
    // Verifica paridade
    const ehPar = (numero % 2) === 0;
    // console.log(ePar);

    // soma com 10
    const soma = numero + 10;

    // Multiplica por ele mesmo
    const multiplica = numero * numero;

    // Retornar a string:
    const frase = `O número ${numero} é par? ${ehPar}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é  ${multiplica}`

    // retornando:
    return frase
}
// console.log(operarNumero(4));
// console.log(operarNumero(5));
// console.log(operarNumero(12));

// Pratica Guiada III:
function verificarLoguinESenha(login, senha){
    const loginArmazenado = 'amanda-polari';
    const senhaArmazenada = '123abc';

    // Verifica se logins são iguais:
    // Se forem iguais o resultado será true:
    const comparaLogin = login === loginArmazenado;

    // Verifica se senhas são iguais:
    // Se forem iguais o resultado será true:
    const comparaSenha = senha === senhaArmazenada;

    // Verifica se ambas são TRUE:
    const verificaInfos = comparaLogin && comparaSenha;

    // Frase do resultado:
    const frase = `As informações de login estão corretas? ${verificaInfos}`

    return frase;
}

// console.log(verificarLoguinESenha('amanda-polari','123abc'));

// console.log(verificarLoguinESenha('amanda','12'));

// console.log(verificarLoguinESenha('amanda','124'));

// console.log(verificarLoguinESenha('123abc','amanda-polari'));

// EXTRA ----------------------->

const verificarLoguinESenhaExtra = (login, senha)=> {
    const loginArmazenado = 'amanda-polari';
    const senhaArmazenada = '123abc';

    // Verifica se logins são iguais:
    // Se forem iguais o resultado será true:
    const comparaLogin = login === loginArmazenado;

    // Verifica se senhas são iguais:
    // Se forem iguais o resultado será true:
    const comparaSenha = senha === senhaArmazenada;

    // Verifica se ambas são TRUE:
    const verificaInfos = comparaLogin && comparaSenha;

    // Frase do resultado:
    const frase = `As informações de login estão corretas? ${verificaInfos}`

    return frase;
}

console.log(verificarLoguinESenhaExtra('amanda-polari','123abc'));

console.log(verificarLoguinESenhaExtra('amanda','12'));

console.log(verificarLoguinESenhaExtra('amanda','124'));

console.log(verificarLoguinESenhaExtra('123abc','amanda-polari'));