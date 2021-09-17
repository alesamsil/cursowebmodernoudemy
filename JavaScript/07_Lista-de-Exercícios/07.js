/*
7) Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.

Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/


function multiplicar(x, y) {
    if(x === 0 || y ===0){
        return 0
    }
    return y === 1 ? x : x + multiplicar(x, y-1)
}

console.log(multiplicar(5, 5)); 
console.log(multiplicar(0, 7));