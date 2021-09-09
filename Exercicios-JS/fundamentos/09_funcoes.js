//Exemplos de funções
console.log(typeof Object);

class Produto { };
console.log(typeof Produto);


{
    //função sem retorno
    function imprimirSoma(a, b) {
        console.log(a + b);
    }
    //chamada
    imprimirSoma(2, 3);

    //chamada com um parametro retorna Nan
    imprimirSoma(2);

    //chamada com mais parametros soma os dois primeiros
    imprimirSoma(2, 10, 5, 8, 9, 8);

    //chamada retorna NaN
    imprimirSoma();
}

{
    //Função com retorno
    function soma(a, b = 1) {
        return a + b;
    }
    console.log(soma(2, 3));

    //Não imprime pois a função retorna um valor
    soma(2, 3);

    //com um paramtro ele soma com o b da chamda da função
    console.log(soma(2));

    //retorna NaN
    console.log(soma());
}

{
    //armazenando uma função em uma variavel
    const imprimirSoma = function (a,b){
        console.log(a+b);
    }
    imprimirSoma(2,3);

    //armazenar uma função arrow em uma variavel 
    const soma = (a, b) =>{
        return a+b;
    }
    console.log(soma(2,3));

    //retorno implicito
    const subtracao = (a, b) => a - b;
}



