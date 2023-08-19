// Implemente a sequência de Collatz: comece com um número n e, se n for par, divida-o por 2; se for ímpar, multiplique por 3 e some 1. Repita o processo até n se tornar 1

import { prompt } from "..";

export function exercicio3() {
    console.log("Programa que implementa a sequência de Collatz");

    let entrada = prompt("Digite um número qualquer: ");
    console.log("Iniciando a sequência de Collatz...");

    function sequenciaDeCollatz() {
        while (entrada != 1) {
            if (entrada % 2 == 0) {
                console.log(`${entrada} é Par`);
                console.log(`Obtem se: ${entrada} / 2 = ${entrada = entrada / 2}`)
            } else if (entrada % 2 != 0) {
                console.log(`${entrada} é Impar`);
                console.log(`Obtem se: (${entrada} * 3) + 1 = ${entrada = (entrada * 3) + 1}`)
            }
        }
        console.log(`Fim da sequência de Collatz. Resultado final ${entrada}`)
    }

    sequenciaDeCollatz();
}

// OK