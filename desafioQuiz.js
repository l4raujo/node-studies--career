const readLine = require("readline");

const leitor = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Bem-vindo(a) ao Quiz de JavaScript!");
console.log("Responda com a letra correta: a, b ou c\n");

let acertos = 0;

leitor.question(
  "1) Qual palavra usamos para criar uma função? \n(a) define\n(b) function\n(c) create\n>",
  (res1) => {
    if (res1 == "b".toLowerCase()) {
      acertos++;
    }

    leitor.question(
      "\n2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n>",
      (res2) => {
        if (res2 == "c".toLowerCase()) {
          acertos++;
        }

        leitor.question(
          '\n3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n>',
          (res3) => {
            if (res3 == "b".toLowerCase()) {
              acertos++;
            }

            if (acertos == 3) {
              console.log("Acertou tudo parabens!", acertos);
            } else if (acertos == 2) {
              console.log("Muito Bom! Continue assim!", acertos);
            } else if (acertos == 1) {
              console.log("Muito bom! Continue melhorando!", acertos);
            } else {
              console.log("Continue praticando!", acertos);
            }

            leitor.close();
          },
        );
      },
    );
  },
);
