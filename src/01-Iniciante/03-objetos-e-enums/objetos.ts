let carro: object = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};
  
type Pessoa =  object;

let cliente: Pessoa = {
  nome: "João",
  idade: 25,
  ativo: true
};

type Usuario = {
    nome: string;
    idade: number;
    status: boolean;
  };
  
  function criarUsuario(nome: string, idade: number): Usuario {
    return {
      nome: nome,
      idade: idade,
      status: true
    };
  }
  