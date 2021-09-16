//Exemplo 1 
//Map não causa alteração no array original
{
    const nums = [1, 2, 3, 4, 5];
    
    //For com proposito
    let resultado = nums.map(function(e){
        return e * 2;
    })

    console.log(resultado);

    const soma10 = e => e + 10;
    const triplo = e => e * 3;
    const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

    resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
    console.log(resultado);

    console.log(nums);
}

//Exemplo 2 
//elementos tipos JSON
{   
   
    const carrinho = [
        '{ "nome": "Borracha", "preco": 3.45}',
        '{ "nome": "Caderno", "preco": 13.90}',
        '{ "nome": "Kit de lápis", "preco": 41.22}',
        '{ "nome": "Caneta", "preco": 7.50}',
    ]

    //retornar um array apenas com os preços
    const paraObjeto = json => JSON.parse(json);
    const apenasPreco = produto => produto.preco;

    const resultado2 = carrinho.map(paraObjeto).map(apenasPreco);
    console.log(resultado2);

}

//Exemplo 3 
//implementando o map
{
    Array.prototype.map2 = function(callback) {
        const newArray = [];
        for(let i = 0; i< this.length; i++){
            newArray.push(callback(this[i], i, this))
        }
        return newArray
    }

    const carrinho2 = [
        '{ "nome": "Apagador", "preco": 2.45}',
        '{ "nome": "Livro", "preco": 15.90}',
        '{ "nome": "Kit de caneta", "preco": 39.99}',
        '{ "nome": "Estojo", "preco": 5.50}',
    ]

    //retornar um array apenas com os preços
    const paraObjeto2 = json => JSON.parse(json);
    const apenasPreco2 = produto => produto.preco;

    const resultado2 = carrinho2.map2(paraObjeto2).map2(apenasPreco2);
    console.log(resultado2);
}
