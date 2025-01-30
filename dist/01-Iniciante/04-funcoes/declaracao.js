"use strict";
function somar(a, b) {
    return a + b;
}
function saudar(nome, sobrenome) {
    console.log(`Olá ${nome} ${sobrenome}, Parabém chegou em funções`);
}
function calcularDesconto(valor, desconto = 10) {
    return valor / desconto;
}
function multiplicar(...numeros) {
    let temp = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        temp = temp * numeros[i];
    }
    return temp;
}
function criarMultiplicador(fator) {
    return (numero) => {
        return numero * fator;
    };
}
const dobrar = criarMultiplicador(2);
console.log(dobrar(10));
