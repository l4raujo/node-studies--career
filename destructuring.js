const pessoa = {
  nome: "Lucas",
  idade: 19,
  profissao: "Software Engineer",
};

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

function saudacao({ nome }) {
  console.log("Olá ", nome);
}

saudacao(pessoa);
