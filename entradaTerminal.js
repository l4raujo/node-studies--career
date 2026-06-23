const readLine = require("readline");

const leitor = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Qual é o seu nome?", (nome) => {
  console.log("Olá, ", nome);

  leitor.close();
});
