//variaveis fora de funções são globais
{
    {
        {
            {
                var sera = "Será?"
            }
        }
    }
}
console.log(sera);


//variaveis dentro de função não são acessadas
function teste(){
    var local = 123;
    console.log(local);
}
teste();
// Fora da função ela não é reconhecida 
//console.log(local);


var numero = 1;
{
    var numero =2;
    console.log('dentro= ',numero);
}
console.log('fora= ',numero);

//var tem scopo global e de função
//let tem escopo global, de função e bloco
var numero2= 1;
{
    let numero2= 2;
    console.log('dentro= ',numero2);
}
console.log('dentro= ', numero2);

let numero3= 1;
{
    let numero3 =2;
    console.log('dentro= ',numero3);
}
console.log('dentro= ',numero3);