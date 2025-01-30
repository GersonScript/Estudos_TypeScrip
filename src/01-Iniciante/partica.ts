
interface Produto {
    nome: string;
    preco: number;
    estoque: number;
    disponivel: boolean;
}

const produtos: Produto[] = [];

function cadastrarProduto(nome: string, preco: number, estoque: number): Produto {
    const disponivel = estoque > 0;
    const produto: Produto = { nome, preco, estoque, disponivel };
    produtos.push(produto);
    return produto;
}

cadastrarProduto("Cadeira", 150, 10);
cadastrarProduto("Mesa", 950, 5);
cadastrarProduto("Notebook", 10000, 2);

function calcularTotal(pedido: { nome: string; preco: number; quantidade: number }[]): number {
    return pedido.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
}

function verificarEstoque(nome: string, quantidade: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const produto = produtos.find((prod) => prod.nome === nome);
        if (!produto) {
            reject("Produto não encontrado");
        } else {
            setTimeout(() => {
                if (produto.estoque >= quantidade) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }, 1000);
        }
    });
}

async function processarPedido(pedido: { nome: string; preco: number; quantidade: number }[]): Promise<string> {
    try {
        for (const item of pedido) {
            const estoqueSuficiente = await verificarEstoque(item.nome, item.quantidade);
            if (!estoqueSuficiente) {
                return "Pedido cancelado: Estoque insuficiente!";
            }
        }

        const total = calcularTotal(pedido);

        return `Pedido realizado com sucesso! Valor total: R$ ${total.toFixed(2)}`;
    } catch (error) {
        console.error("Erro ao processar o pedido:", error);
        return "Erro no processamento do pedido.";
    }
}

async function exibirPedido(pedido: { nome: string; preco: number; quantidade: number }[]) {
    const mensagem = await processarPedido(pedido);

    console.log(mensagem);

    if (mensagem.includes("sucesso")) {
        console.log("Detalhes do pedido:");
        pedido.forEach(item => {
            console.log(`Produto: ${item.nome}, Preço: R$ ${item.preco}, Quantidade: ${item.quantidade}`);
        });
    }
}

const pedidoExemplo = [
    { nome: "Cadeira", preco: 150, quantidade: 2 },
    { nome: "Mesa", preco: 950, quantidade: 1 },
    { nome: "Notebook", preco: 10000, quantidade: 1 }
];

exibirPedido(pedidoExemplo);
