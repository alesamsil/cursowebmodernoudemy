//Exemplo 1: function declaration
/*
    Desta forma vc pode chamar a função antes da 
    declaração.
*/
console.log(soma(3,4))
function soma (x,y){
    return x + y;
}

//Exemplo 2: function expression
/*
    Desta forma não é possivel chamar antes da
    declaração.
*/
const sub = function(x, y){
    return x - y;
}


//Exemplo 3: named function expression
/*
    Desta forma não é possivel chamar antes da
    declaração.
*/
const mult = function mult(x, y){
    return x * y;
}

