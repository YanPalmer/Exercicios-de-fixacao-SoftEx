// Crie um programa que some os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados

import { prompt } from "..";

export function exercicio4() {
    console.log("Programa que soma os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados...");

    const quantidadeDeValores: number = prompt("Digite quantos valores haverão nos arrays: ");
    const array1: number[] = [];
    const array2: number[] = [];
    const array3: number[] = [];

    function primeiroArray() {
        let entrada1: number;
        console.log("Primeiro array...");
        for (let i = 0; i < quantidadeDeValores; i++) {
            entrada1 = prompt(`Digite o ${i+1} valor: `);
            array1.push(entrada1);
        }
        return array1;
    }
    function segundoArray() {
        let entrada2: number;
        console.log("Segundo array...");
        for (let i = 0; i < quantidadeDeValores; i++) {
            entrada2 = prompt(`Digite o ${i+1} valor: `);
            array2.push(entrada2);
        }
        return array2;
    }
    function terceiroArray(array1: number[], array2: number[]) {
        let soma: number;
        console.log("Somando das dimensões dos arrays...");
        for (let i = 0; i < quantidadeDeValores; i++) {
            soma = +array1[i] + +array2[i];
            array3.push(soma);
        }
        console.log(array3);
    }
    primeiroArray();
    segundoArray();
    terceiroArray(array1, array2);
}

// OK