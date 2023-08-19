// Converta uma temperatura de Celsius para Fahrenheit usando funções

import { prompt } from "..";

export function exercicio3() {
    console.log("Programa que converte uma temperatura de Celsius para Fahrenheit usando funções...");

    let celsius = prompt("Digite uma temperatura em graus Celsius: ");

    function converterParaFahrenheit() {
        let fahrenheit = (celsius * 1.8) + 32;
        return fahrenheit;
    }
    console.log(`A temperatura de ${celsius}º em fahrenheit é ${converterParaFahrenheit()}º`);
}

// OK