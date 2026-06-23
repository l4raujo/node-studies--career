function calcular(num1, num2, operacao) {
  return operacao(num1, num2);
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

const resultadoSoma = calcular(5, 3, somar);
const resultadoSubtracao = calcular(5, 3, subtrair);

console.log("Resultado da soma: " + resultadoSoma);
console.log("Resultado da subtração: " + resultadoSubtracao);
