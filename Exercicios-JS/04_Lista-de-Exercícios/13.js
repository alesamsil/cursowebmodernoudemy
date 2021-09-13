/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function dia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(dia(0));
console.log(dia(1));
console.log(dia(2));
console.log(dia(3));
console.log(dia(4));
console.log(dia(5));
console.log(dia(6));
console.log(dia(7));
console.log(dia(8));
console.log(dia('a'));

