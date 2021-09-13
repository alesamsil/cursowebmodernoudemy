/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function numNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos;
}

vetor =  [-1, 0, 1, 4, -10, -3, -1, 5, -18, -20, 18, 7];

console.log(numNegativos(vetor));