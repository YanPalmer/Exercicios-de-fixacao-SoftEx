import { iniciarProgramaGeral, prompt } from "..";
import { reiniciarPrograma } from "../reiniciarPrograma";
import { exercicio1 } from "./Ex01";
import { exercicio2 } from "./Ex02";

let exercicio: string;

export function iniciarGerenciador2() {
    console.log("=================================================");
    console.log("Bem vindo a lista de exercícios de estruturas de controle!");
    console.log("Escolha qual exercício será executado: ");
    console.log("1 - Verifique se um número é positivo, negativo ou zero usando declarações if, else if e else");
    console.log("2 - Determine se um número é ímpar ou par utilizando uma estrutura if e o operador %");
    console.log("3 - Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400)");
    console.log("4 - Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /)");
    console.log("5 - Verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente)");
    console.log("0 - Voltar");
    exercicio = prompt("Digite o número: ");
    console.log();

    switch (exercicio) {
        case "1":
            exercicio1();
            reiniciarPrograma(2);
            break;
        case "2":
            exercicio2();
            reiniciarPrograma(2);
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "0":
            iniciarProgramaGeral();
            break;
        default:
            console.log("Entrada incorreta!");
            console.log("Reiniciando o programa...");
            iniciarGerenciador2();
            break;
    }

}