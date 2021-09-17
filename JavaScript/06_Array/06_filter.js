//Exemplo 1
{
    const produtos = [
        { nome: 'Notebook', preco: 2499, fragil: true },
        { nome: 'iPad pro', preco: 4199, fragil: true },
        { nome: 'Copo de vidro', preco: 12.49, fragil: true },
        { nome: 'Copo de plástico', preco: 18.99, fragil: false },
    ]

    console.log(produtos.filter(function (p) {
        /*
        return false, nenhum elemento passa
        return true, todos os elementos passam
        return com uma condição filtra o retorno
        */
        return p.preco > 4000
    }))


    //criar duas funções para filtrar e apresentar encadeado
    const caro = produto => produto.preco >= 500;
    const fragil = produto => produto.fragil;
    console.log(produtos.filter(caro).filter(fragil));
}

//Exemplo 2
{
    Array.prototype.filter2 = function (callback) {
        const newArray = []
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                newArray.push(this[i])
            }
        }
        return newArray
    }

    const produtos2 = [
        { nome: 'Notebook', preco: 2499, fragil: true },
        { nome: 'iPad pro', preco: 4199, fragil: true },
        { nome: 'Copo de vidro', preco: 12.49, fragil: true },
        { nome: 'Copo de plástico', preco: 18.99, fragil: false },
    ]
    //criar duas funções para filtrar e apresentar encadeado
    const caro2 = produto2 => produto2.preco >= 500;
    const fragil2 = produto2 => produto2.fragil;
    console.log(produtos2.filter2(caro2).filter2(fragil2));
}