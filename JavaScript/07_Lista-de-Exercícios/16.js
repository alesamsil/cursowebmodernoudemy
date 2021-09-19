/* 
16)Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function somarNumeros (vet){
    let num = 0;
    for (let i = 0; i < vet.length; i++){
        num = num + vet[i]
    }
    return num;
}

console.log(somarNumeros([10, 10, 10])); 
console.log(somarNumeros([15, 15, 15, 15]));