const pessoa ={
    nome: 'Rebeca',
    idade:2,
    peso:13
}

//lê só as chaves
console.log(Object.keys(pessoa));
//lê só os valores
console.log(Object.values(pessoa));
//ler entradas, chave e valor
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//definir propriedades mais ricas
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, //propriedade de eunumeração
    writable: false, //propriedade que permite ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2027';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assing (ECMAScript 2015)
//comcatenação de todos os atributos que vc passa no assing
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest, o1, o2);

console.log(obj);

Object.freeze(obj);
obj.c=1234;

console.log(obj);