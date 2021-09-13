//Criar objetos literais
const prod1 = {};

//Adiciona atributos dinâmicamente
prod1.nome = "Celular";
prod1.preco= 499.90;

console.log(prod1);

//evitar atributos com espaço
console.log(prod1);
prod1['Desconto'] = 0.40 

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    tamanho: 'M',
}
console.log(prod2)

//estrutura de objetos aninhadas
const prod3 = {
    nome: 'Bermuda',
    preco: 69.90,
    tamanho: 42,
    cor:{
        frente: 'jeans azul',
        tras: 'jeans azul escuro'
    }
}
console.log(prod3)