const escola = "Cod3r";

//charAt() retorna a letra da string
console.log(escola.charAt(4));
//charAt() quando não existe retorna vazio
console.log(escola.charAt(5));

//charCodeAt() retorna o valor da tabela asci
console.log(escola.charCodeAt(3));

//indexOf() retorna o indice 
console.log(escola.indexOf('3'));

//substring() imprimi substrings
console.log(escola.substring(1));  //saida od3r
console.log(escola.substring(0,3)); //saida Cod (começa no zero e vai ate o 3)

//concat() concatena strings
console.log('Escola '.concat(escola).concat("!"));

//replace() subistitui no indice o caracter
console.log(escola.replace(3, 'e')); //saida Coder, substitui o 3 pelo e
console.log(escola.replace(/\w/g, 'e')); //saida eeee, substitui tudo por e

//gera um array usando a ',' como parametro para separação
console.log('Ana, Maria,Joao,Pedro'.split(','));

//cuidado com concatenar 
console.log('3'+2); // vira string
