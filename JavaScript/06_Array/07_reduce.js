//Exemplo 1
{ 
    const alunos = [
        {nome: 'João', nota: 7.3, bolsista: false},
        {nome: 'Maria', nota: 9.2, bolsista: true},
        {nome: 'Pedro', nota: 9.8, bolsista: false},
        {nome: 'Ana', nota: 8.7, bolsista: true},
    ]

    console.log(alunos.map(a => a.nota));

    const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
        console.log(acumulador, atual)
        return acumulador + atual
    }, 0 /*como valor inicial*/)

    console.log(resultado)
}

//Exemplo 2 
{
    const alunos2 = [
        {nome: 'João', nota: 7.3, bolsista: false},
        {nome: 'Maria', nota: 9.2, bolsista: true},
        {nome: 'Pedro', nota: 9.8, bolsista: false},
        {nome: 'Ana', nota: 8.7, bolsista: true},
    ]
    //Desafio 1: Todos os alunos são bolsistas?

    const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
    console.log(alunos2.map(b => b.bolsista).reduce(todosBolsistas))

    //Desafio 2: Algum aluno é bolsista?
    const algumBolsista = (resultado, bolsista) => resultado || bolsista;
    console.log(alunos2.map(b => b.bolsista).reduce(algumBolsista));

}

//Exemplo 3
{
    Array.prototype.reduce2 = function(callback, valorInicial){
        const indiceInicial = valorInicial ? 0 : 1
        let acumulador = this[0]
        for(let i = 1; i < this.length; i++){
            acumulador = callback(acumulador, this[i], i, this)
        }
        return acumulador
    }

    const soma = (total, valor) => total + valor;
    const nums = [1, 2, 3, 4, 5, 6];
    console.log(nums.reduce2(soma))

    //passando valor inbicial
    console.log(nums.reduce2(soma, 21))
}