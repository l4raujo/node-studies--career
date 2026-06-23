const nomes = ["Lucas", "Solange", "Denis", "Emily"];

nomes.map((nome) => {
  console.log(nome);
});

const frutas = ["Abacaxi", "Banana", "Melancia", "Morango", "Uva"];

frutas.push("Melão");
console.log(frutas);

frutas.shift(0);
console.log(frutas);

const cidades = ["Taboão", "Embu", "Jardins"];
console.log(cidades.length);

let tarefas = ["Academia", "Estudar node", "Estudar ingles", "Faculdade"];
let concluida = [true, false, true, true];

let tarefasPendentes = tarefas.filter((tarefa, index) => {
  return concluida[index] === false;
});

let tarefasConcluidas = tarefas.filter((tarefa, index) => {
  return concluida[index] === true;
});

console.log("Tarefas pendentes: ", tarefasPendentes);
console.log("Tarefas concluidas: ", tarefasConcluidas);
