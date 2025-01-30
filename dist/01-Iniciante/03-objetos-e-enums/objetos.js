"use strict";
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};
let cliente = {
    nome: "João",
    idade: 25,
    ativo: true
};
function criarUsuario(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        status: true
    };
}
