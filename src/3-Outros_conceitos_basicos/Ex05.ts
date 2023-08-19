// Crie uma função que remova elementos duplicados de um array

import { prompt } from "..";

export function exercicio5() {
    console.log("Programa que cria uma função que remove elementos duplicados de um array");

    let arrayDeElementos: any[] = [];
    let maxDeElementos = 0;

    function arrays() {
        maxDeElementos = prompt("Digite a quantidade de elementos: ");
        for (let i = 0; i < maxDeElementos; i++) {
            arrayDeElementos.push(prompt(`Digite o ${i+1}º elemento: `));
        }
        // console.log(arrayDeElementos);
        // Ex: "oi", "oi", "to"
    }

    let novoArray: number[] = [];
    function verificarElementosIguais(arrayDeElementos: number[]) {
        for (const elemento of arrayDeElementos) {
            if (!novoArray.includes(elemento)) {
                novoArray.push(elemento);
            }
        }
        return novoArray;
    }

    arrays();
    verificarElementosIguais(arrayDeElementos);
    console.log(novoArray);
    console.log(`O novo array de elementos sem valores duplicados é:\n${novoArray.join(" ")}`);
}

// OK