let nome: string = "Gérson Resplandes de Sá Sousa";
let idade: number = 17;
let gostaDeTypeScript: boolean = true;
let numero: any = "56" // any: Permite qualquer tipo de valor, sem checagem de tipo.
function logMessage(message: string): void {
    console.log(message);
}
// void: Representa a ausência de um valor de retorno em funções
// ou seja a função não vai retorna valor
// never: Representa um valor que nunca ocorre, como funções que nunca terminam ou que sempre lançam erros.
// os outros tipos funciona também em funções como string, number, boolean, any