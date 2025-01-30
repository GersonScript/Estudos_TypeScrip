let pessoa: [string, number] = ["Alice", 30];

let coordenada1: [number, number] = [3, 4];
let coordenada2: [number, number] = [0, 0];

function distanciaEntrePontos(p1: [number, number], p2: [number, number]): number {
  return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
}
