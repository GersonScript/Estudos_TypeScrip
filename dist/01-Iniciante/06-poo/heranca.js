"use strict";
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    ligar() {
        console.log("Ligando o veículo...");
    }
}
class Carro extends Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano); // Chama o construtor da classe pai (Veiculo)
    }
    abrirPorta() {
        console.log("Abrindo a porta do carro...");
    }
}
// Agora, criamos uma instância da classe Carro
const carros = new Carro("Fiat", "Uno", 2022);
// Chamamos os métodos da instância carro
carros.ligar(); // Exibe "Ligando o veículo..."
carros.abrirPorta(); // Exibe "Abrindo a porta do carro..."
