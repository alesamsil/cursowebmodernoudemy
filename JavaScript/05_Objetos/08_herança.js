//Exemplo 1
{
    const ferrari = {
        modelo: 'F40',
        velMax: 234
    }

    const volvo = {
        modelo: 'V40',
        velMax: 200
    }

    /*
    procura dentro da cadeia do prototipo pais
    se não encontrar ele retorna undefined
    */

    console.log(ferrari.__proto__);
    console.log(ferrari.__proto__ === Object.prototype);
    console.log(volvo.__proto__ === Object.prototype);

    console.log(Object.prototype.__proto__);
    console.log(Object.prototype.__proto__ === null);

    function MeuObjeto() { };
    console.log(typeof Object, typeof MeuObjeto);
    console.log(Object.prototype, MeuObjeto.prototype);

    //prototype está presente apenas dentro de funções, ferrari é um objeto
    console.log(ferrari.prototype);
}

//Exemplo2
//Cadeia de protótipos (prototype chain)
{
    Object.prototype.attr0 = '0'; //evitar fazer essa manipulação
    
    const avo = { attr1: 'A'};
    const pai = {__proto__: avo, attr2: 'B', attr3: '3'};
    const filho = {__proto__:pai, attr3: 'C'};

    console.log(filho.attr1);
    console.log(filho.attr0);
    console.log(filho.attrA);
    console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

    const carro = {
        velAtual: 0,
        velMax: 200,
        acelerarMais(delta) {
            if(this.velAtual + delta <= this.velMax) {
                this.velAtual += delta;
            } else{
                this.velAtual = this.velMax;
            }
        },
        status() {
            return `${this.velAtual}Km/h de ${this.velMax}km/h`
        }
    }

    const ferrari2 = {
        modelo: 'F40',
        velMax: 350 //shadowing sombrea variaveis de escopo mais abrangente
    }

    const volvo2 = {
        modelo: 'V40',
        status(){
            return `${this.modelo}: ${super.status()}`; //super referencia ao prototipo
        }
    }

    //Função que estabelece função de protótipo entre dois objetos
    Object.setPrototypeOf(ferrari2, carro);
    Object.setPrototypeOf(volvo2, carro);

    console.log(ferrari2);
    console.log(volvo2);

    volvo2.acelerarMais(100);
    console.log(volvo2.status());

    ferrari2.acelerarMais(300);
    console.log(ferrari2.status());
}

//Exemplo 3

{

}
