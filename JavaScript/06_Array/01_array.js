/*
Estrutura dinâmica, indexada a partir do 0. 
Array é um Objeto. 
*/
console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array ('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

//Acessar indices inexistentes não é problema seu retorno é undefined
console.log(aprovados[3]);

//substitui a partir de um indice
aprovados[3] = 'Paulo';
aprovados.push('Abia');

console.log(aprovados.length);

//adiciona o indice 9 e os outros indices antes ele cria com undefined
aprovados[9] = 'Rafael';
console.log(aprovados.length);

console.log(aprovados[8] === undefined);

console.log(aprovados);

//método sort altera o array
aprovados.sort()
console.log(aprovados);

//seta undefined na posição
delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

//.splice() remove e adicionar elementos
aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1,1); //vai remover um elemento a partir do indice um
console.log(aprovados);

//remove dois elementos a partir do indice 1 e adicionar dois elementos 
aprovados.splice(1,2, 'Elemento1', 'Elemento2'); 
console.log(aprovados);

//a partir do indice 3 vai adicionar dois elementos
aprovados.splice(3,0, 'Elemento3', 'Elemento4'); 
console.log(aprovados);