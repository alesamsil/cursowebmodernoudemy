//Break, desvio de fluxo pra fora do laço
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in notas){
    if( x == 5){
        break;
    }
    console.log(`x = ${notas[x]}`);
}

//Continue, desvio de fluxo da repecição corrente para a próxima
for (y in notas){
    if( y == 5){
        continue;
    }
    console.log(`y = ${notas[y]}`);
}

externo: for (a in notas){
    for(b in notas){
        if (a == 2 && b==3) break externo
        console.log(`Par = ${a}, ${b}`)

    }
}
console.log('Fim!')