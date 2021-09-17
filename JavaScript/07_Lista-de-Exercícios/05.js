/* 
5) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 7) // retornará false

*/

function maiorOuIgual (x, y){
    if(typeof x != typeof y){
        return console.log(false);
    } 
    if (x >= y){
        return console.log(true);
    }
    else{
        return console.log(false);
    }
    
}

maiorOuIgual(0, 0);
maiorOuIgual(0, "0"); 
maiorOuIgual(5, 7); 