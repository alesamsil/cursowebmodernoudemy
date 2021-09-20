const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

//faz o requirimento 
const axios = require('axios')


//Desafio Mulher chinesa com menor salários
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSlario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func =  funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSlario)
    console.log(func)
})

