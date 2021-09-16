//Exemplo 1 
{
    const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel'];
    
    aprovados.forEach(function(nome, indice, array){
        console.log(`${indice +1}) ${nome}`)
    })

    aprovados.forEach(nome => console.log(nome));

    const exibirAprovados = aprovado => console.log(aprovado);
    aprovados.forEach(exibirAprovados);


}

//Exemplo2
{
    const aprovados2 = ['Jose', 'Maria', 'Jovenal', 'Ruth'];
    Array.prototype.forEach2 = function (callback){
        for(let i = 0; i < this.length; i ++){
            callback(this[i], i, this)
        }
    }

    aprovados2.forEach2(function(nome, indice, array){
        console.log(`${indice +1}) ${nome}`)
    })

}