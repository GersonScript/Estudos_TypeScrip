enum StatusPedido {
    Pendente = "Pendente",
    Processando = "Processando",
    Enviado = "Enviado",
    Entregue = "Entregue"
  }
  
  function enviarPedido(pedido: { id: number; status: StatusPedido }): void {
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
  