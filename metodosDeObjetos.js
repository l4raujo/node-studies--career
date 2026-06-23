const pessoa = {
  nome: "Vinicius",
  idade: 37,
  pets: ["luke"],
  nacionalidade: "Brasileiro",
};

for (const chave in pessoa) {
  console.log(chave);
  console.log(pessoa[chave]);
}

const chaves = Object.keys(pessoa);
console.log(chaves);

const valores = Object.values(pessoa);
console.log(valores);

const entradas = Object.entries(pessoa);
console.log(entradas);
