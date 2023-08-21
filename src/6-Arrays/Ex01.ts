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
        return quantidadeDeNumeros;d
    }

    function ordenarNumeros(arrayDeNum: number[], quantidadeDeNumeros: number) {
        while () {
            
        }
    }

    
    // console.log(inserirArrayDeNumeros());
}