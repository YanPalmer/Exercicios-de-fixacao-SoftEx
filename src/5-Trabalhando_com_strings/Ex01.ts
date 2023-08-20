// Conte quantas vogais há em uma string

import { prompt } from "..";

export function exercicio1() {
    console.log("Programa que conta quantas vogais há em uma string");

    // Exemplo: yan
    const palavra: string = prompt("Digite uma palavra qualquer: ");
    const vogais: string = "aeiouAEIOU";

    function verificarVogais() {
        console.log();
        let quantidadeDeVogais: number = 0;
        let vogaisEncontradas: string[] = [];
        
        for (const letra of palavra) {
            if (vogais.includes(letra)) {
                quantidadeDeVogais++;
                vogaisEncontradas.push(letra);
            }
        }
        console.log(`A palavra "${palavra}" contem:`);
        console.log(`${quantidadeDeVogais} vogais e foram encontradas as vogais: ${vogaisEncontradas.join(", ")}`)
    }

    verificarVogais();
}

// OK