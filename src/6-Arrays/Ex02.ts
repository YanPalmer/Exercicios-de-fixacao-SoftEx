// Encontre o maior valor em um array de números

import { prompt } from "..";

export function exercicio2() {
    console.log("Programa que encontra o maior valor em um array de números...");

    function inserirArrayDeNumeros() {
        const arrayDeNum: number[] = [];
        const quantidadeDeNumeros: number = prompt("Digite quantos números você deseja inserir: ");

        for (let i = 0; i < quantidadeDeNumeros; i++) {
            const entrada = parseInt(prompt(`Digite a ${i + 1}º entrada: `));
            arrayDeNum.push(entrada);
        }
        return { array: arrayDeNum, quantidade: quantidadeDeNumeros };
    }
    const { array: arrayDeNum, quantidade: quantidadeDeNumeros } = inserirArrayDeNumeros();
    // console.log(arrayDeNum);

    // Ex: 2, 4, 1
    function encontrarMaiorValor(arrayDeNum: number[], quantidadeDeNumeros: number) {
        let maiorValor: number = arrayDeNum[0];
        for (let i = 0; i < quantidadeDeNumeros; i++) {
            if (arrayDeNum[i+1] > maiorValor) {
                maiorValor = arrayDeNum[i+1];
            }
        }
        console.log(maiorValor);
    }
    encontrarMaiorValor(arrayDeNum, quantidadeDeNumeros);
}

// OK