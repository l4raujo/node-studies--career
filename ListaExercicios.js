const saudacao = (nome) => {
  console.log(`Olá, ${nome}! Seja bem-vindo(a)`);
};

saudacao("Lucas");

function apresentarPessoa(nome, idade) {
  console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos de idade.`);
}

apresentarPessoa("Lucas", 19);

function calcularImc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

let imc = calcularImc(80, 1.85);
console.log("Seu imc: ", imc.toFixed(2));

function verificarAprovacao(nota) {
  let aprovadoSe = nota >= 7 ? "Aprovado" : "Reprovado";
  return aprovadoSe;
}

let aprovadoSeNota = verificarAprovacao(7);
console.log(aprovadoSeNota);

function ehPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let numeroEhPar = ehPar(4);
console.log("O numero é par: ", numeroEhPar);

const calcular = (num1, num2, operador) => {
  return operador(num1, num2);
};

const soma = (num1, num2) => {
  return num1 + num2;
};

let somaNumeros = calcular(12, 8, soma);
console.log("A soma dos numeros é: ", somaNumeros);

function calcularTroco(valorCompra, valorPago) {
  let troco = valorPago - valorCompra;

  return troco;
}

let trocoDevolvido = calcularTroco(50, 70);
console.log("Seu troco é: ", trocoDevolvido);
