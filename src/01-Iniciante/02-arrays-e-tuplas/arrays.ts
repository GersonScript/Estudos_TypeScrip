// let numeros: number[] = [1, 2, 3, 4, 5];
// let nomes: string[] = ["Alice", "Bob", "Charlie"];

let numeros: Array<number> = [1, 2, 3, 4, 5];
let nomes: Array<string> = ["Alice", "Bob", "Charlie"];

function primeiroElemento<T>(array: T[]): T {
    return array[0]
}