"use strict";
const produto1 = {
    nome: "Camiseta",
    preco: 49.99,
    disponivel: true
};
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    estudar() {
        console.log("Estudando...");
    }
}
const aluno = new Aluno("Lucas", 20);
aluno.estudar(); // Deve exibir "Estudando..."
// pessoa1.dataNascimento = "1999-05-20"; // Deve dar erro
