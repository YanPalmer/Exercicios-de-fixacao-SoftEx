// Crie um array de nomes e ordene-o em ordem alfabética

import { prompt } from "..";

export function exercicio3() {
    console.log("Programa que cria um array de nomes e ordene-o em ordem alfabética...");

    function inserirArrayDeNumeros() {
        const arrayDeStrings: string[] = [];
        const quantidadeDeNumeros: number = prompt("Digite quantos números você deseja inserir: ");

        for (let i = 0; i < quantidadeDeNumeros; i++) {
            const entrada = prompt(`Digite a ${i + 1}º entrada: `);
            arrayDeStrings.push(entrada);
        }
        return { array: arrayDeStrings, quantidade: quantidadeDeNumeros };
    }
    const { array: arrayDeStrings, quantidade: quantidadeDeNumeros } = inserirArrayDeNumeros();
    // console.log(arrayDeStrings);

    function ordenarNomes(arrayDeStrings: string[]) {
        arrayDeStrings.sort((a, b) => a - b);
        return arrayDeStrings;
    }
}