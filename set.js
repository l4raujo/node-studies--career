let numeros = new Set();

numeros.add(1);

numeros.add(2);

numeros.add(2); // Não será adicionado novamente

console.log(numeros); // Resultado: Set { 1, 2 }

let arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];

let arraySemDuplicatas = [...new Set(arrayComDuplicatas)];

console.log(arraySemDuplicatas); // Resultado: [1, 2, 3, 4, 5]
