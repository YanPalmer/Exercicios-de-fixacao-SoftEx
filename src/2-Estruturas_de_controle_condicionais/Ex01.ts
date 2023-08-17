// Verifique se um número é positivo, negativo ou zero usando declarações if, else if e else

import { prompt } from "..";

export function exercicio1() {
    console.log("Programa que verifica se um número é positivo, negativo ou zero usando declarações if, else if e else...");

    let entrada = prompt("Digite um número qualquer: ");
    
    if (entrada > 0) {
        console.log(`O número ${entrada} é Positivo`);
    } else if (entrada < 0) {
        console.log(`O número ${entrada} é Negativo`);
    } else if (entrada == 0) {
        console.log(`O número ${entrada} é igual a Zero`);
    } else {
        console.log(`A entrada ${entrada} não é um número!`);
        console.log("Tente novamente...");
        exercicio1();
    }
}

// OK