const nome = 'Rebeca';

const concatenacao = 'Ola' + nome + '!';

//
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressões com templatestrings
console.log(`1 + 1 = ${1 + 1}`);

//funções com templatestring
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);