let pessoa1 = {
  nome: "Lucas",
  idade: 19,
  profissao: "Software Engineer",
};

const pessoa2 = { ...pessoa1 };
pessoa2.idade = 30;

console.log(pessoa1);
console.log(pessoa2);

pessoa1 = {
  ...pessoa2,
  profissao: "Dev",
};

console.log(pessoa1);

const { nome, ...restante } = pessoa1;
console.log(nome);
console.log(restante);
