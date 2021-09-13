let valor //não inicializada
console.log(valor);

//ausencia de valor
valor = null;
console.log(valor);

//console.log(valor.toString()); Erro

const produto = {};
console.log(produto.preco);

produto.preco = 3.50;
console.log(produto);

//Evitar atribuir undefined
produto.preco = undefined 

console.log(!!produto.preco);
console.log(produto);

//delete produto.preco remove

produto.preco = null //sem preço
console.log(!!produto.preco);

console.log(produto);



