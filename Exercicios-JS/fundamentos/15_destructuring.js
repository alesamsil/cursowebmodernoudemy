/*
Destructuring a partir de objeto
recurso do ES2015
*/
{
    const pessoa = {
        nome: 'Ana',
        idade: 15,
        endereco: {
            logradouro: 'Rua abc',
            numero: 1000
        }
    }
    
    //tira do objeto os atributos
    const { nome, idade } = pessoa;
    console.log(nome,idade);

    //tira do objeto o atributo e cria variavel 
    const {nome: n, idade: i } = pessoa;
    console.log(n,i);

    /*
    se tentar tirar um atributo que não existe
    retorna undefined o valor true atribuido é que
    se não tiver nada ele retornará verdadeiro
    */
    const {sobrenome, bemHumorado = true} = pessoa;
    console.log(sobrenome,bemHumorado);

    /*
    extrai dentro de enderelo o logradouro, numero, cep
    */
   const {endereco:{logradouro, numero, cep}} = pessoa;
   console.log(logradouro, numero, cep);
}

/*
Destructuring a partir de um array
recurso do ES2015
*/
{
    const [a] = [10];
    console.log(a);

    const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8];
    console.log(n1,n3,n5,n6);

    const [, [, nota]] = [[8,8,8], [9,6,8]];
    console.log(nota);
    
}