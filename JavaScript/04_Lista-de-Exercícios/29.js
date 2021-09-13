/* 
29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function intervalo (vetor) {
    numNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            numNoIntervalo++
        }
    }
    return `${numNoIntervalo} números dentro do intervalo.`
}

vetor = [ 0, 5, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21, 23];

console.log(intervalo(vetor));