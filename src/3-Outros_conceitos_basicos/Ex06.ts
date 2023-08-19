// Escreva uma função que inverta uma string (exemplo: "hello" => "olleh")

import { prompt } from "..";

export function exercicio6() {
    console.log("Programa que escreve uma função que inverte uma string \(exemplo: \"hello\" => \"olleh\"\)");

    let palavraInvertida = [];
    
    let palavra = prompt("Digite uma palavra para ser invertida: ");
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida.push(palavra[i]);
    }
    console.log(`A palavra ${palavra} invertida é:\n${palavraInvertida.join("")}`);
}

// OK