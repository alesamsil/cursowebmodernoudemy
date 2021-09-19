/*
25) Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.

Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/

function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return console.log(frase);
}

removerVogais("Cod3r");
removerVogais("Fundamentos");