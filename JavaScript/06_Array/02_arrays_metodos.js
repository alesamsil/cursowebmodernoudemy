const pilotos = ['Vertel', 'Alonso', 'Raikkonen', 'Massa'];
console.log(pilotos);

//.pop() remove o último elemento do array
pilotos.pop();
console.log(pilotos);

//.push() adiciona um elemento no array na ultima posição
pilotos.push('Verstappen');
console.log(pilotos);

//.shift() remove o primeiro elemento do array
pilotos.shift();
console.log(pilotos);

//.usshift() adiciona um elemento no início
pilotos.unshift('Hamilton');
console.log(pilotos);

//splice pode adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//splice pode remover elementos
pilotos.splice(3, 1);
console.log(pilotos);

//.slice(N) novo array gerado a partir do indice passado
const algunsPilotos = pilotos.slice(2);
console.log(algunsPilotos);

//slice(N, M) novo array gerado no intervalo fechado em N e aberto em M 
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);



