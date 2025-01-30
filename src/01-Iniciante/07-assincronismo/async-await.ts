// function saudarDepoisDe2Segundos(): void {
//     setTimeout(() => {
//         console.log("Olá!");
//     }, 2000);
// }

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

async function carregarDados(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dados carregados");
        }, 3000);
    });
}

async function exibirDados(): Promise<void> {
    const resultado = await carregarDados();
    console.log(resultado); // Exibe "Dados carregados" após 3 segundos
}

exibirDados();

async function dividir(a: number, b: number): Promise<number> {
    if (b === 0) {
        throw new Error("Divisão por zero");
    }
    return a / b;
}
