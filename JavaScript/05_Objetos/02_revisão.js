//coleção dinâmica de pare chave/valor

const produto = new Object;
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['Marca do produto'];

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        endereco: {
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade:'42'
    }],
    calcularValorSeguro: function (){
        //...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante';

console.log(carro);
delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;

console.log(carro);
//apos excluir ele retorna undefined
console.log(carro.condutores);

//tentar acessar algo de indefinido retornará erro
//console.log(carro.condutores.length)


