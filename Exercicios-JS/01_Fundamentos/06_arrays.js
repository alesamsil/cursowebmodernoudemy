const valores = [7.7,8.9,6.3,9.2];

console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4]= 10;
console.log(valores[4]);
console.log(valores);

//.length tamanho do vetor
console.log(valores.length);

//.push adiciona elementos
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

//.pop remove
console.log(valores.pop);

// deleta um elemento 
delete valores[0];
console.log(valores);


console.log(typeof valores);



