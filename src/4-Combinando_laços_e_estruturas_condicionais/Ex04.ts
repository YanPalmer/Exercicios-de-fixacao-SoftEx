// Verifique se um número é primo ou não

import { prompt } from "..";

export function exercicio4() {
    console.log("Programa que verifica se um número é primo ou não");

    const entrada = prompt("Digite um número para verificar se é primo: ");

    function verificarPrimo(entrada: number) {
        if (entrada <= 1) {
            return false;
        }
        if (entrada <= 3) {
            return true;
        }
        if (entrada % 2 === 0 || entrada % 3 === 0) {
            return false;
        }
        // Não entendi como funciona
        for (let i = 5; i * i <= entrada; i += 6) {
            if (entrada % i === 0 || entrada % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }
    if (verificarPrimo(entrada)) {
        console.log(`${entrada} é primo.`);
    } else {
        console.log(`${entrada} não é primo.`);
    }

    // //  Extra:
    // function apresentarPrimos() {
    //     console.log("Gostaria de ver os números primos até 100?");
    // }

    // apresentarPrimos();
}

// OK