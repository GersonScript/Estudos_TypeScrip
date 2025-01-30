"use strict";
function calcular(a, b, operacao) {
    return operacao(a, b);
}
const soma = (x, y) => x + y;
const multiplicacao = (x, y) => x * y;
console.log(calcular(5, 3, soma)); // Retorna 8
console.log(calcular(5, 3, multiplicacao)); // Retorna 15
function detectarTipo(valor) {
    if (typeof valor === 'string') {
        return 'string';
    }
    else if (typeof valor === 'number') {
        return 'number';
    }
    else if (typeof valor === 'boolean') {
        return 'boolean';
    }
    else if (typeof valor === 'undefined') {
        return 'undefined';
    }
    else if (valor === null) {
        return 'null';
    }
    else {
        return 'outro tipo';
    }
}
console.log(detectarTipo(42)); // Deve exibir "number"
console.log(detectarTipo("Oi")); // Deve exibir "string"
console.log(detectarTipo(true)); // Deve exibir "boolean"
console.log(detectarTipo(undefined)); // Deve exibir "undefined"
console.log(detectarTipo(null)); // Deve exibir "null"
function mover(direcao) {
    console.log(`Movendo para: ${direcao}`);
}
mover("esquerda"); // OK
mover("direita"); // OK
// mover("frente");  Erro: Argumento do tipo 'frente' não pode ser atribuído ao parâmetro do tipo '"esquerda" | "direita" | "cima" | "baixo"'.
function cumprimentar(nome) {
    const saudacao = nome !== null && nome !== void 0 ? nome : "visitante"; // Se nome for null ou undefined, usa "visitante"
    console.log(`Olá, ${saudacao}`);
}
cumprimentar("Ana"); // Exibe "Olá, Ana"
cumprimentar(); // Exibe "Olá, visitante"
cumprimentar(null); // Exibe "Olá, visitante"
