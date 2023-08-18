import { prompt } from "..";

export function exercicio5() {
    console.log("Programa que verifica se uma string é um palíndromo (lê-se da mesma forma de trás para frente)...");

    let listaInversa = [];
    let listaInversaString;

    let palavra = prompt("Digite uma palavra qualquer ou um palíndromo: ").toLowerCase();
    for (let i = palavra.length - 1; i >= 0; i--) {
        listaInversa.push(palavra[i]);
    }
    listaInversaString = listaInversa.join("");

    if ( palavra === listaInversaString) {
        console.log(`A palavra ${palavra} é um Palíndromo!`);
    } else {
        console.log(`A palavra ${palavra} não é um Palíndromo!`)
    }
}

// OK