// Crie um array de números e ordene-o em ordem crescente

import { prompt } from ".."

export function exercicio1() {
    console.log("Programa que cria um array de números e ordene-o em ordem crescente...")

    function inserirArrayDeNumeros() {
        const arrayDeNum: number[] = [];
        const quantidadeDeNumeros: number = prompt("Digite quantos números você deseja inserir: ");

        for (let i = 0; i < quantidadeDeNumeros; i++) {
            const entrada = parseInt(prompt(`Digite a ${i + 1}º entrada: `));
            arrayDeNum.push(entrada);
        }
        return arrayDeNum;
    }
    // Array atual
    let arrayDeNum: number[] = inserirArrayDeNumeros();

    // Ex: 2, 3, 1, 5
    function ordenarNumeros(arrayDeNum: number[]) {
        arrayDeNum.sort((a, b) => a - b);
        return arrayDeNum;
    }

    const numerosOrdenados: string = ordenarNumeros(arrayDeNum).join(", ");

    console.log(`Os números ordenados são: ${numerosOrdenados}`);
}

// OK