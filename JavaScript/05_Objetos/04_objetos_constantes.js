//pessoa -> 123 -> {...}
const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

/*
pessoa -> 456 -> {...}
Gera erro pois um objeto constante não pode a porntar para outro endereço de memória
pessoa = {nome: 'Ana'};

*/


//Congela o objeto, não gera erro mas não atribui o novo valor e nem altera os existentes
Object.freeze(pessoa);
pessoa.nome = 'Maria';
console.log(pessoa.nome);
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);


const pessoaConstante = Object.freeze({nome: 'Joao'});
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante);
