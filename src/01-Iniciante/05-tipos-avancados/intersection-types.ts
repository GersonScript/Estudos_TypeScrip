let id: number | string = 123;

function mostrarId(id: number | string): void {
  console.log(`ID: ${id}`);
}

mostrarId(101); // Deve funcionar
mostrarId("abc123"); // Deve funcionar
// mostrarId(true); Dar erro!

type Pessoaa = {
    nome: string;
    idade: number;
  };
  
  type Funcionario = {
    cargo: string;
    salario: number;
  };
  
  type Gerente = {
    nome: string,
    idade: number,
    cargo: string,
    salario: number
  };
  
  const gerente: Gerente = {
    nome: "Carlos",
    idade: 40,
    cargo: "Gerente de TI",
    salario: 8000
  };
  