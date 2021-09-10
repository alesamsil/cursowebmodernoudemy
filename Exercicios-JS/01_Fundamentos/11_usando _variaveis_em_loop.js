//usando var
for (var i = 0; i < 10; i++ ){
    console.log(i);
}
console.log('i= ',i);

//usando let
for (let j = 0; j < 10; j++ ){
    console.log(j);
}
// a variavei i não esta visivel por conta
//do escopo do let 

//console.log('j',j);



//exemplo com var
var funcs = [];

for (var k = 0; k < 10; k++ ){
    funcs.push(function(){
        console.log(k);
    })
}

funcs[2]();
funcs[8]();

//exemplo com let
let funcs2 = [];

for (let l = 0; l < 10; l++ ){
    funcs2.push(function(){
        console.log(l);
    })
}

funcs2[2]();
funcs2[8]();
funcs2[8]();