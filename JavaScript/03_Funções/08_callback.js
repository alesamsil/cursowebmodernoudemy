//exemplo 1
{
    console.log("Exemplo 1");
    const fabricantes = ["Mercedes", "Audi", "Bmw"];

    function imprimir(nome, indice) {
        console.log(`${indice + 1}. ${nome}`)
    }

    fabricantes.forEach(imprimir);

    fabricantes.forEach(function (fabricante) {
        console.log(fabricante);
    })
}

//exemplo 2
{
    console.log("Exemplo 2");
    const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
    //sem callback

    const notasBaixas1 = [];
    for (let i in notas) {
        if (notas[i] < 7) {
            notasBaixas1.push(notas[i])
        }
    }

    console.log(notasBaixas1);

    //com callback
    const notasBaixas2 = notas.filter(function (nota) {
        return nota < 7;
    })
    console.log(notasBaixas2);

    //com função arrow
    const notasBaixas3 = notas.filter(nota => nota < 7);
    console.log(notasBaixas3);
}

//exemplo 3 callback no browser
/*
{
    document.getElementsByTagName('body')[0].onclick = function(e){
        console.log("O evento ocorreu");
    }
}
*/