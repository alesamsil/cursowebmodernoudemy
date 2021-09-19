/* 
20)Criar uma função que receba um array de números e retorne o menor número desse array.

Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
*/

function menorNumero(vet) {
    let menor = vet[0];

    for (let i in vet)
        if (vet[i] < menor)
            menor = vet[i];
    return console.log(menor)
}

menorNumero([10, 5, 35, 65]);
menorNumero([5, -15, 50, 3]);