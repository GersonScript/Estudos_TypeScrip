"use strict";
let pessoa = ["Alice", 30];
let coordenada1 = [3, 4];
let coordenada2 = [0, 0];
function distanciaEntrePontos(p1, p2) {
    return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
}
