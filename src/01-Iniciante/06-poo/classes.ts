interface Produto {
    nome: string;
    preco: number;
    disponivel: boolean
}

const produto1: Produto = {
    nome: "Camiseta",
    preco: 49.99,
    disponivel: true
};
interface Pessooa {
    nome: string;
    idade: number;
}

class Aluno implements Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    estudar(): void {
        console.log("Estudando...");
    }
}

const aluno = new Aluno("Lucas", 20);
aluno.estudar(); // Deve exibir "Estudando..."


// pessoa1.dataNascimento = "1999-05-20"; // Deve dar erro
