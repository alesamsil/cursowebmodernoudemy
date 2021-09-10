//if simples que so imprime se a nota for positiva
{
    function soBoaNota(nota) {
        if (nota >= 7) {
            console.log('Aprovadp com ' + nota)
        }
    }

    soBoaNota(8.1);
    soBoaNota(6.1);
}

//imprime caso seja verdadeiro
{
    function seForVerdadeuFalo(valor) {
        if (valor) {
            console.log('É verdade...' + valor)
        }
    }

    seForVerdadeuFalo();
    seForVerdadeuFalo(null);
    seForVerdadeuFalo(undefined);
    seForVerdadeuFalo(NaN);
    seForVerdadeuFalo('');
    seForVerdadeuFalo(0);
    seForVerdadeuFalo(-1);
    seForVerdadeuFalo(' ');
    seForVerdadeuFalo('?');
    seForVerdadeuFalo([]);
    seForVerdadeuFalo([1, 2]);
    seForVerdadeuFalo({});
}

// Mais exemplos de if
{
    function teste1(num){
        if(num > 7){
            console.log(num);
        }
        console.log('Final');
    }
    teste1(6);
    teste1(8);

    /*
    o ';' apos bloco de if quebra o codigo
    */
   function teste2 (num){
        if (num > 8); {
            console.log(num);
        }
    }
    teste2(6);
    teste2(8);
}

// if/else
{
    const imprimirResultado = function(nota){
        if (nota >= 7){
            console.log("Aprovado");
        } else {
            console.log("Reprovado");
        }
    }
    imprimirResultado(10);
    imprimirResultado(4);
    //cuidado com passar variaveis 
    imprimirResultado('Epa!');
}

// if/else/if...
{
    Number.prototype.entre = function (inicio, fim){
        return this >= inicio && this <= fim;
    }

    const imprimirResultado = function (nota){
        if (nota.entre(9,10)){
            console.log("Quadro de honra");
        } else if(nota.entre(7, 8.99)){
            console.log("Aprovado");
        } else if(nota.entre(4, 6.99)){
            console.log("Recuperação");
        } else if(nota.entre(0, 3.99)){
            console.log("Reprovado");
        } else {
            console.log('Nota Invalida');
        }
        console.log('Fim');
    }

    imprimirResultado(10);
    imprimirResultado(8.9);
    imprimirResultado(6.55);
    imprimirResultado(2.3);
    imprimirResultado(-1);
    imprimirResultado(11);
}