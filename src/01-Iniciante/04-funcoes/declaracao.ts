function somar(a: number, b: number): number {
    return a + b;
}
  
function saudar(nome: string, sobrenome?: string): void {
    console.log(`Olá ${nome} ${sobrenome}, Parabém chegou em funções`)
}

function calcularDesconto(valor: number, desconto: number = 10): number {
    return valor / desconto
}

function multiplicar(...numeros: number[]): number {
    let temp: number = numeros[0]
    for (let i = 1; i < numeros.length; i++){
        temp = temp * numeros[i]
    }
    return temp
}

function criarMultiplicador(fator: number): (numero: number) => number {
    return (numero: number) => {
      return numero * fator;
    };
  }
  
  const dobrar = criarMultiplicador(2);
  console.log(dobrar(10));
  