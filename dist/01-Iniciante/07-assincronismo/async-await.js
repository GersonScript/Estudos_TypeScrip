"use strict";
// function saudarDepoisDe2Segundos(): void {
//     setTimeout(() => {
//         console.log("Olá!");
//     }, 2000);
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// saudarDepoisDe2Segundos(); // Deve exibir "Olá!" após 2 segundos
// function carregarDados(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Dados carregados");
//         }, 3000);
//     });
// }
// carregarDados().then((resultado) => {
//     console.log(resultado); // Exibe "Dados carregados" após 3 segundos
// });
function carregarDados() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Dados carregados");
            }, 3000);
        });
    });
}
function exibirDados() {
    return __awaiter(this, void 0, void 0, function* () {
        const resultado = yield carregarDados();
        console.log(resultado); // Exibe "Dados carregados" após 3 segundos
    });
}
exibirDados();
function dividir(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        if (b === 0) {
            throw new Error("Divisão por zero");
        }
        return a / b;
    });
}
