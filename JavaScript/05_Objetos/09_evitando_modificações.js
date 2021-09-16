//Object.preventExtensions
//você pode alterar o objeto e não incluir nada nele
const produto = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

//Object.seal
//não é possivel nem adiconar ou excluir elementos dos objeto
const pessoa = {nome: 'Juliana', idade: 35};
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

//Object.freeze = selado + valores constantes
