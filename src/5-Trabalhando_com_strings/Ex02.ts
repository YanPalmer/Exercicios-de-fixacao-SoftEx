// Converta uma string para maiúsculas

import { prompt } from "..";

export function exercicio2() {
    console.log("Programa que converte uma string para maiúsculas...");

    const palavra = prompt("Digite uma palavra qualquer: ");

    console.log(`A palavra "${palavra}" convertida para maiúscula é: "${palavra.toUpperCase()}"`);
}

// OK