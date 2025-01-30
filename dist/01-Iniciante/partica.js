"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const produtos = [];
function cadastrarProduto(nome, preco, estoque) {
    const disponivel = estoque > 0;
    const produto = { nome, preco, estoque, disponivel };
    produtos.push(produto);
    return produto;
}
cadastrarProduto("Cadeira", 150, 10);
cadastrarProduto("Mesa", 950, 5);
cadastrarProduto("Notebook", 10000, 2);
function calcularTotal(pedido) {
    return pedido.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
}
function verificarEstoque(nome, quantidade) {
    return new Promise((resolve, reject) => {
        const produto = produtos.find((prod) => prod.nome === nome);
        if (!produto) {
            reject("Produto não encontrado");
        }
        else {
            setTimeout(() => {
                if (produto.estoque >= quantidade) {
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            }, 1000);
        }
    });
}
function processarPedido(pedido) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (const item of pedido) {
                const estoqueSuficiente = yield verificarEstoque(item.nome, item.quantidade);
                if (!estoqueSuficiente) {
                    return "Pedido cancelado: Estoque insuficiente!";
                }
            }
            const total = calcularTotal(pedido);
            return `Pedido realizado com sucesso! Valor total: R$ ${total.toFixed(2)}`;
        }
        catch (error) {
            console.error("Erro ao processar o pedido:", error);
            return "Erro no processamento do pedido.";
        }
    });
}
function exibirPedido(pedido) {
    return __awaiter(this, void 0, void 0, function* () {
        const mensagem = yield processarPedido(pedido);
        console.log(mensagem);
        if (mensagem.includes("sucesso")) {
            console.log("Detalhes do pedido:");
            pedido.forEach(item => {
                console.log(`Produto: ${item.nome}, Preço: R$ ${item.preco}, Quantidade: ${item.quantidade}`);
            });
        }
    });
}
const pedidoExemplo = [
    { nome: "Cadeira", preco: 150, quantidade: 2 },
    { nome: "Mesa", preco: 950, quantidade: 1 },
    { nome: "Notebook", preco: 10000, quantidade: 1 }
];
exibirPedido(pedidoExemplo);
