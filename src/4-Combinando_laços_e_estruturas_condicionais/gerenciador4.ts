import { iniciarProgramaGeral, prompt } from "..";
import { reiniciarPrograma } from "../reiniciarPrograma";
import { exercicio1 } from "./Ex01";
import { exercicio2 } from "./Ex02";

let exercicio: string;

export function iniciarGerenciador4() {
    console.log("=================================================");
    console.log("Bem vindo a lista de exercícios de Combinando laços e estruturas condicionais!");
    console.log("Escolha qual exercício será executado: ");
    console.log("1 - Imprima os números de 1 a 50, mas para múltiplos de 3 imprima \"Sof\" e para múltiplos de 5 imprima \"Tex\"");
    console.log("2 - Crie um programa que imprima a tabela de multiplicação de 1 a 10");
    console.log("3 - Implemente a sequência de Collatz: comece com um número n e, se n for par, divida-o por 2; se for ímpar, multiplique por 3 e some 1. Repita o processo até n se tornar 1");
    console.log("4 - Verifique se um número é primo ou não");
    console.log("0 - Voltar");
    exercicio = prompt("Digite o número: ");
    console.log();

    switch (exercicio) {
        case "1":
            exercicio1();
            reiniciarPrograma(4);
            break;
        case "2":
            exercicio2();
            reiniciarPrograma(4);
            break;
        case "3":
            // exercicio3();
            reiniciarPrograma(4);
            break;
        case "4":
            // exercicio4();
            reiniciarPrograma(4);
            break;
        case "0":
            iniciarProgramaGeral();
            break;
        default:
            console.log("Entrada incorreta!");
            console.log("Reiniciando o programa...");
            iniciarGerenciador4();
            break;
    }

}