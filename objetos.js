const pessoa = {
  nome: "Lucas",
  idade: 19,
  temCNH: false,
};

console.log(pessoa);

const livro = {
  titulo: "O Hobbit",
  autor: "J. R. R. Tolkien",
  paginas: 310,
};

livro.publicado = true;
livro.idiomas = ["Ingles", "Portugues", "Espanhol"];

console.log(livro);

livro.idiomas.push("Frances");
console.log(livro);
