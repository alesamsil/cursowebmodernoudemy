let dobro = function (a){
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // retun implicito
console.log(dobro(Math.PI));

let ola = function (){
    return 'ola';
}

ola = () => 'ola';
ola = _ => 'ola'; //possui um parametro
console.log(ola());

/*
//  Arrow com this
function Pessoa () {
    this.idade = 0;
    
    setInterval(() =>{
        this.idade++
        console.log(this.idade);
    },1000)
}
new Pessoa
*/

//this aponta para o objto global

let comparaComThis = function (param){
    console.log(this === param);
}

comparaComThis(global)

const obj = {};
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global);
comparaComThis(obj);


let comparaComThisArrow = param =>console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThis(obj);
comparaComThisArrow(module.exports);