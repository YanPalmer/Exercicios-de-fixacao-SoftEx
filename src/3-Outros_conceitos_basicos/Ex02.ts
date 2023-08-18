// Crie uma função que retorne o maior valor entre três números.

import { prompt } from "..";

export function exercicio2() {
    console.log("Programa que cria uma função que retorna o maior valor entre três números...");

    console.log("Digite três números: ");
    let num1 = prompt("Número 1: ");    // 3
    let num2 = prompt("Número 2: ");    // 2
    let num3 = prompt("Número 3: ");    // 1

    if (num1 > num2 && num1 > num3) {
        console.log(`O 1º número: ${num1} é o maior valor entre ${num2} e ${num3}.`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`O 2º número: ${num2} é o maior valor entre ${num1} e ${num3}.`);
    } else if (num3 > num1 && num3 > num2) {
        console.log(`O 3º número: ${num3} é o maior valor entre ${num1} e ${num2}.`);
    } else {
        console.log("Algo errado! Tente novamente...");
        exercicio2();
    }
}

// OK