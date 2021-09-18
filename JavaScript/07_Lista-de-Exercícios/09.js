/*
09) Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.

Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/


function simboloMais (x){
    let simb = '';
    
    for(let i = 0; i < x; i++){
        simb += '+';
    } 
    return simb;
}

console.log(simboloMais(2));
console.log(simboloMais(4));