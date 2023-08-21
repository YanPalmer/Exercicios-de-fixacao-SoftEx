// Crie um array de números e ordene-o em ordem crescente

import { prompt } from ".."

export function exercicio1() {
    console.log("Programa que cria um array de números e ordene-o em ordem crescente...")

    function inserirArrayDeNumeros() {
        const arrayDeNum: number[] = [];
        const quantidadeDeNumeros: number = prompt("Digite quantos números você deseja inserir: ");
        let entrada: number;

        for (let i = 0; i < quantidadeDeNumeros; i++) {
            entrada = prompt(`Digite a ${i + 1}º entrada:`);
            arrayDeNum.push(entrada);
        }
        return arrayDeNum;
        return quantidadeDeNumeros;
    }

    // Ex: 2, 3, 1, 5
    function ordenarNumeros(arrayDeNum: number[], quantidadeDeNumeros: number) {
        let menorValor: number = 0;
        for (const numero of arrayDeNum) {
            if (numero < menorValor) {
                menorValor = numero;
            }
        }
    }

    
    // console.log(inserirArrayDeNumeros());
}