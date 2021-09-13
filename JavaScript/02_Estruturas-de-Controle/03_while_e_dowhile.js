//while
function getInteiro(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;
while(opcao != -1){
    opcao = getInteiro(-1, 10);
    console.log('Opção escolhida foi '+ opcao);
}

console.log('Com while - Ate a proxima');

//do while
opcao = -1;
do{
    opcao = getInteiro(-1, 10);
    console.log('Opção escolhida foi '+ opcao);
}while(opcao != -1);

console.log('Com Do While - Ate a proxima');
