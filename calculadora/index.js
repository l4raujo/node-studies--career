// const readLine = require("readline");
import { createInterface } from "readline";
import { soma, subtracao } from "./operacoesMatematicas.js";

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Digite o primeiro número:\n", (numero1) => {
  leitor.question("Digite a operação:\n+) soma\n-)subtração\n>", (operação) => {
    leitor.question("Digite o segundo numero:\n", (numero2) => {
      const num1 = Number(numero1);
      const num2 = Number(numero2);

      let resultado = null;

      if (operação == "+") {
        resultado = soma(num1, num2);
      } else if (operação == "-") {
        resultado = subtracao(num1, num2);
      } else {
        console.log("Operação inválida");
      }

      if (resultado != null) {
        console.log("O resultado da operação é: ", resultado);
      }

      leitor.close();
    });
  });
});
