// Determine se um número é ímpar ou par utilizando uma estrutura if e o operador %

import { prompt } from "..";

export function exercicio2() {
    console.log("Programa que determina se um número é ímpar ou par utilizando uma estrutura if e o operador %...");
    
    let numero = prompt("Digite um número inteiro: ");

    if (numero % 2 == 0) {
        console.log(`O número ${numero} é PAR`);
    } else if (numero % 2 != 0) {
        console.log(`O número ${numero} é IMPAR`);
    } else {
        console.log("Não é um número! Tente novamente...");
        exercicio2();
    }
}