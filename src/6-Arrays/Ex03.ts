// Crie um array de nomes e ordene-o em ordem alfabética

import { prompt } from "..";

export function exercicio3() {
    console.log("Programa que cria um array de nomes e ordene-o em ordem alfabética...");

    function inserirArrayDeStrings() {
        const arrayDeStrings: string[] = [];
        const quantidadeDeNumeros: number = prompt("Digite quantas palavras você deseja inserir: ");

        for (let i = 0; i < quantidadeDeNumeros; i++) {
            const entrada = prompt(`Digite a ${i + 1}º palavra: `);
            arrayDeStrings.push(entrada);
        }
        return { array: arrayDeStrings, quantidade: quantidadeDeNumeros };
    }
    const { array: arrayDeStrings, quantidade: quantidadeDeNumeros } = inserirArrayDeStrings();
    // console.log(arrayDeStrings);

    function ordenarNomes(arrayDeStrings: string[]) {
        arrayDeStrings.sort();
        return arrayDeStrings;
    }
    const palavrasOrdenadas: string[] = ordenarNomes(arrayDeStrings);

    console.log(`As palavras ordenadas são: ${palavrasOrdenadas}`);
}

// OK