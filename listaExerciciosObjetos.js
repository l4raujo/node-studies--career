const pessoa = {
  nome: "Lucas",
  idade: 19,
  profissão: "Software Engineer",
};

const name = pessoa.nome;
console.log(name);

pessoa.idade = 20;

console.log(pessoa);

pessoa.cidade = "Taboão da Serra";

function exibirDetalhesObjeto(pessoa) {
  return (
    "Olá meu nome é " +
    pessoa.nome +
    ", tenho " +
    pessoa.idade +
    " anos e sou " +
    pessoa.profissão +
    "."
  );
}

console.log(exibirDetalhesObjeto(pessoa));
