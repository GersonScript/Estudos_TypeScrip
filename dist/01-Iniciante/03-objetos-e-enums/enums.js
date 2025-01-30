"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Pendente"] = "Pendente";
    StatusPedido["Processando"] = "Processando";
    StatusPedido["Enviado"] = "Enviado";
    StatusPedido["Entregue"] = "Entregue";
})(StatusPedido || (StatusPedido = {}));
function enviarPedido(pedido) {
    pedido.status = StatusPedido.Enviado;
}
// Exemplo de uso
let pedido = {
    id: 123,
    status: StatusPedido.Pendente
};
console.log(pedido.status); // "Pendente"
enviarPedido(pedido);
console.log(pedido.status); // "Enviado"
