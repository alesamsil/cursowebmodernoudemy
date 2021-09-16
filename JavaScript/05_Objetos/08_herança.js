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
    const pai2 = {
        nome: 'Pedro',
        corCabelo: 'preto'
    }
    
    const filha1 = Object.create(pai2);
    filha1.nome = 'Ana';
    console.log(filha1.corCabelo);

    const filha2 = Object.create(pai2, {
        nome: {value: 'Bia', writable: false, enumerable: true}
    })

    console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

    console.log(Object.keys(filha1));
    console.log(Object.keys(filha2));

    for(let key in filha2) {
        filha2.hasOwnProperty(key) ?
            console.log(key) : console.log(`Por herança: ${key}`);
    }
}

//Exemplo 4 
{
    function MeuObjeto1 () {};
    console.log(MeuObjeto1.prototype)

    const obj1 = new MeuObjeto1;
    const obj2 = new MeuObjeto1;

    console.log(obj1.__proto__ === obj2.__proto__);
    console.log(MeuObjeto1.prototype === obj1.__proto__);

    MeuObjeto1.prototype.nome = 'Anônimo';

    MeuObjeto1.prototype.falar = function() {
        console.log(`Bom dia meu nome é ${this.nome}!`)
    }

    obj1.falar();

    obj2.nome = 'Rafael';
    obj2.falar();

    obj3 = {};
    obj3.__proto__ = MeuObjeto1.prototype;
    obj3.nome = 'Obj3';
    obj3.falar();

    //resumindo
    console.log((new MeuObjeto1).__proto__ === MeuObjeto1.prototype);
    console.log(MeuObjeto1.__proto__ === Function.prototype);
    console.log(Function.prototype.__proto__ === Object.prototype); 
    console.log(Object.prototype.__proto__ === null);
}
