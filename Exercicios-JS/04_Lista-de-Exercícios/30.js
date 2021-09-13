/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorMenor (vetor) {
    let maior;
    let menor;
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i];
            menor = vetor[i];
        } else {
            if (vetor[i] > maior){
                maior = vetor[i];
            }
            if(vetor[i] < menor){
                menor = vetor[i];
            }
        }
    }
    return [maior, menor];
}

vetor =  [8, 2, 11, 4, 7, 3, 1, 22, 12, 20, 6, 10];

console.log(`O maior e o menor número: ${maiorMenor(vetor)}`);