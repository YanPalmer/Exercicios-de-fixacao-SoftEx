// Remova os espaços em branco de uma string

import { prompt } from "..";

export function exercicio3() {
    console.log("Programa que remove os espaços em branco de uma string...");

    const palavra = prompt("Digite uma palava qualquer com espaços no final ou no começo: ");

    console.log(`A palavra "${palavra}" sem espaços fica: "${palavra.trim()}"`);
    // palavra.trimStart();     // Remove o espaço do início da frase
    // palavra.trimEnd();     // Remove o espaço do fim da frase
}

// OK