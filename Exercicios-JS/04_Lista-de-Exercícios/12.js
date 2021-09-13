/*
12) Faça um algoritmo que calcule o fatorial de um número
*/
function fat (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fat(numero - 1)
    }
}

let num = 5;
console.log(`O fatorial de: ${num} é ${fat(num)}`)