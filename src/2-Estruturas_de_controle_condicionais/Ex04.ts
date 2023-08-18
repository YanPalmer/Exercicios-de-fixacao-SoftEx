import { prompt } from "..";

export function exercicio4() {
    console.log("Programa que cria uma calculadora simples que opera com dois números e um operador (+, -, *, /)...");

    let valor1 = parseInt(prompt("Digite um valor: "));
    let valor2 = parseInt(prompt("Digite outro valor:"));
    console.log("Escolha um dos operadores a seguir:");
    console.log("1 - (+)");
    console.log("2 - (-)");
    console.log("3 - (/)");
    console.log("4 - (*)");
    let operador = prompt("Número do operador: ");

    switch (+operador) {
        case 1:
            console.log(valor1 + valor2);
            break;
        case 2:
            console.log(valor1 - valor2);
            break;
        case 3:
            console.log(valor1 / valor2);
            break;
        case 4:
            console.log(valor1 * valor2);
            break;
        default:
            console.log("Teste");
            break;
    }
    console.log();

}

// OK