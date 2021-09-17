/* 
4) Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"
*/

function nomeDoMes(numero) {
    switch(numero){
    case 1:
        return console.log("Janeiro");
    case 2:
        return console.log("Fevereiro");
    case 3:
        return console.log("Março");
    case 4:
        return console.log("Abril");
    case 5:
        return console.log("Maio");
    case 6:
        return console.log("Junho");
    case 7:
        return console.log("Julho");
    case 8:
        return console.log("Agosto");
    case 9:
        return console.log("Setembro");
    case 10:
        return console.log("Outubro");
    case 11:
        return console.log("Novembro");
    case 12:
        return console.log("Dezembro");
    default:
        return console.log("Mês inválido");
    }
}

nomeDoMes(1) 
nomeDoMes(4) 