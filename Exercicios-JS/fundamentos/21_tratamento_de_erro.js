function tratarErroELancar(erro){
    /*
    podemos lançar:
    throw new Error('...');
    throw 10;
    throw true
    th 'mensagem'
    */
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } 
    catch (e) {
        tratarErroELancar(e);
    } 
    finally {
        console.log("final")
    }
}
 //passando nome da erro e name funciona
//const obj = {nome:'Roberto'};
const obj = {name:'Roberto'};
imprimirNomeGritado(obj);