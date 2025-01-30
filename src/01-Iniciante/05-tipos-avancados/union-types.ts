type OperacaoMatematica = (x: number, y: number) => number;

function calcular(a: number, b: number, operacao: OperacaoMatematica): number {
  return operacao(a, b);
}

const soma: OperacaoMatematica = (x, y) => x + y;
const multiplicacao: OperacaoMatematica = (x, y) => x * y;

console.log(calcular(5, 3, soma)); // Retorna 8
console.log(calcular(5, 3, multiplicacao)); // Retorna 15


function detectarTipo(valor: unknown): string {
    if (typeof valor === 'string') {
      return 'string';
    } else if (typeof valor === 'number') {
      return 'number';
    } else if (typeof valor === 'boolean') {
      return 'boolean';
    } else if (typeof valor === 'undefined') {
      return 'undefined';
    } else if (valor === null) {
      return 'null';
    } else {
      return 'outro tipo';
    }
  }
  
  console.log(detectarTipo(42)); // Deve exibir "number"
  console.log(detectarTipo("Oi")); // Deve exibir "string"
  console.log(detectarTipo(true)); // Deve exibir "boolean"
  console.log(detectarTipo(undefined)); // Deve exibir "undefined"
  console.log(detectarTipo(null)); // Deve exibir "null"
  
  function mover(direcao: "esquerda" | "direita" | "cima" | "baixo"): void {
    console.log(`Movendo para: ${direcao}`);
  }
  
  mover("esquerda"); // OK
  mover("direita"); // OK
  // mover("frente");  Erro: Argumento do tipo 'frente' não pode ser atribuído ao parâmetro do tipo '"esquerda" | "direita" | "cima" | "baixo"'.
  

  function cumprimentar(nome?: string | null): void {
    const saudacao = nome ?? "visitante"; // Se nome for null ou undefined, usa "visitante"
    console.log(`Olá, ${saudacao}`);
  }
  
  cumprimentar("Ana"); // Exibe "Olá, Ana"
  cumprimentar(); // Exibe "Olá, visitante"
  cumprimentar(null); // Exibe "Olá, visitante"
  
  