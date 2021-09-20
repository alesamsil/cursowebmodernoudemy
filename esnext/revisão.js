//let e const 
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l,e,tras)

const [x,y] = [1, 2]
console.log(x,y)

const {idade: i, nome} = { nome: 'Ana', idade: 9}
console.log(i, nome)

//arrow function
const soma = (a,b) => a + b
console.log(soma(2,3))

//arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametros default
function log(texto = 'Node'){
    console.log(texto)
}
log()
log('Sou mais forte')

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))