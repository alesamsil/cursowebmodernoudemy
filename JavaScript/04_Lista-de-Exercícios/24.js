/*
24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while
*/

function helloWorld () {
   let i = 0
    while (i < 11) {
        console.log(`${i+1} Hello World`);
        i++;
    }   
}

helloWorld();