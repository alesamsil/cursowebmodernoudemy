//Exemplo 1: Função Factory
//Cria novos objetos na chamada da função
{
    /*
    const prod1 = {
        nome: '...',
        preco: 45
    }
    
    const prod2 = {
        nome: '...',
        preco: 1234
    }
    */

    function criarPessoa() {
        return {
            nome: 'Ana',
            sobrenome: 'Silva'
        }
    }

    console.log(criarPessoa());
}

//Exemplo 2
{
    function criarProduto(nome, preco) {
        return {
            //não ha necessitade de colocar nome: nome
            nome,
            preco,
            desconto: 0.1
        }
    }
    console.log(criarProduto('Notebook', 2199.49));
    console.log(criarProduto('iPad', 1199.49));
}

//Exemplo 3
//Comparação da classe com a função factory
{
    class Pessoa {
        constructor(nome){
            this.nome = nome;
        }

        falar () {
            console.log(`Meu nome é ${this.nome}`);
        }
    }

    const p1 = new Pessoa ('João');
    p1.falar();

    const criarPessoa = nome => {
        return {
            falar: () => console.log(`Meu nome é ${nome}`)
        }
    }
    const p2 = criarPessoa('João');
    p2.falar();

}

