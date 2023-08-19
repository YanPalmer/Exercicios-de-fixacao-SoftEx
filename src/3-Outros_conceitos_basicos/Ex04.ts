// Crie uma função que receba um array de números e retorne a média deles

import { prompt } from "..";

export function exercicio4() {
    console.log("Programa que cria uma função que recebe um array de números e retorna a média deles");

    let arrayDeNum: any[] = [];
    let maxDeNumeros = 0;

    function arrays() {
        maxDeNumeros = prompt("Digite a quantidade de números: ");
        for (let i = 0; i < maxDeNumeros; i++) {
            arrayDeNum.push(prompt(`Digite o ${i+1}º valor: `));
        }
        // console.log(arrayDeNum);
        // Ex: "1", "2", "3"
    }

    let somaDoArray = 0;
    let media;
    function funcaoMedia() {
        for (let j = 0; j < maxDeNumeros; j++) {
            somaDoArray = somaDoArray + +arrayDeNum[j];
        }
        media = somaDoArray / maxDeNumeros;
        console.log(`Valores inseridos: ${arrayDeNum}`);
        console.log(`A média da soma dos valores é: ${media}`);
    }
    arrays();
    funcaoMedia();
}

// OK