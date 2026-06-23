const frutas = ["Uva", "Banana", "Kiwi", "Maça", "Morango"];

// console.log(frutas);
// console.log(frutas[0]);

// console.log(frutas.length);

// frutas.push("Melancia");
// console.log(frutas);

// console.log(frutas[frutas.length - 1]);

frutas.splice(0, 1);
console.log(frutas);

// for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// for each
frutas.forEach((value) => {
  console.log("Valor da lista: ", value);
});

// for/of
for (const fruta of frutas) {
  console.log(fruta);
}
