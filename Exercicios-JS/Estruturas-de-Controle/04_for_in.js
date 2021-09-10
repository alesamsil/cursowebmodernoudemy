//While
let contador = 1;
while (contador <= 10){
    console.log('contador = '+ contador);
    contador++;
}

//For
for(let i = 1; i <= 10; i++){
    console.log('contador = '+ i);
}

//For pra percorrer vetores
const notas = [6.7, 7.4, 8.1, 7.7];
for (i = 0; i < notas.length; i++){
    console.log('nota = ' + notas[i]);
}

//For in pega os indices
//de preferencia use o let pra declarar as variaveis

for (let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 26,
    peso: 55
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

