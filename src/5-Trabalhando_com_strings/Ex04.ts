// Conte quantas ocorrências de uma determinada letra existem em uma string

import { prompt } from "..";

export function exercicio4() {
    console.log("Programa que conta quantas ocorrências de uma determinada letra existem em uma string...");

    // Ex: "Scooby DOO"
    const palavra: string = prompt("Digite uma palavra \"GRANDE\" qualquer: ").toLowerCase();
    // Ex: "o"
    const letraEscolhida: string = prompt("Digite a letra que você deseja verificar: ");
    let contador: number = 0;

    for (const iteracao of palavra) {
        if (iteracao.includes(letraEscolhida)) {
            // console.log(iteracao);
            contador++;
        }
    }
    console.log();
    console.log(`A palavra "${palavra}" contem: ${contador}nº para a letra "${letraEscolhida}"`);
}

// OK