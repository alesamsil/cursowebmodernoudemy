/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function div3 (numero) {
    if(numero % 3 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(div3(3));
console.log(div3(2));
console.log(div3(40));
console.log(div3(60));
console.log(div3(100));
