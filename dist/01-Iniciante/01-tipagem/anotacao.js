"use strict";
let nome = "Gérson Resplandes de Sá Sousa";
let idade = 17;
let gostaDeTypeScript = true;
let numero = "56"; // any: Permite qualquer tipo de valor, sem checagem de tipo.
function logMessage(message) {
    console.log(message);
}
// void: Representa a ausência de um valor de retorno em funções
// ou seja a função não vai retorna valor
// never: Representa um valor que nunca ocorre, como funções que nunca terminam ou que sempre lançam erros.
// os outros tipos funciona também em funções como string, number, boolean, any
