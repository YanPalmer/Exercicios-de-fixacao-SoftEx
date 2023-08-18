// Crie uma função que calcule o fatorial de um número inteiro

import { prompt } from "..";

export function exercicio1() {
    console.log("Programa que cria uma função que calcula o fatorial de um número inteiro...");

    let numero = prompt("Digite um número: ");
    let somaFatorial = 1;

    // 1 * 2 = 2
    // 2 * 3 = 6
    // 6 * 4 = 24
    // 24 * 5 = 120
    for (let i = 2; i <= numero; i++) {
        somaFatorial = somaFatorial * i;
        console.log(somaFatorial);
    }
}

// OK