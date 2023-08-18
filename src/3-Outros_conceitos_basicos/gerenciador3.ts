import { iniciarProgramaGeral, prompt } from "..";
import { reiniciarPrograma } from "../reiniciarPrograma";
import { exercicio1 } from "./Ex01";

let exercicio: string;

export function iniciarGerenciador3() {
    console.log("=================================================");
    console.log("Bem vindo a lista de exercícios de outros conceitos basicos!");
    console.log("Escolha qual exercício será executado: ");
    console.log("1 - Crie uma função que calcule o fatorial de um número inteiro");
    console.log("2 - Crie uma função que retorne o maior valor entre três números");
    console.log("3 - Converta uma temperatura de Celsius para Fahrenheit usando funções");
    console.log("4 - Crie uma função que receba um array de números e retorne a média deles");
    console.log("5 - Crie uma função que remova elementos duplicados de um array");
    console.log("6 - Escreva uma função que inverta uma string (exemplo: \"hello\" => \"olleh\"");
    console.log("0 - Voltar");
    exercicio = prompt("Digite o número: ");
    console.log();

    switch (exercicio) {
        case "1":
            exercicio1();
            reiniciarPrograma(3);
            break;
        case "2":
            // exercicio2();
            reiniciarPrograma(3);
            break;
        case "3":
            // exercicio3();
            reiniciarPrograma(3);
            break;
        case "4":
            // exercicio4();
            reiniciarPrograma(3);
            break;
        case "5":
            // exercicio5();
            reiniciarPrograma(3);
            break;
        case "6":
            // exercicio6();
            reiniciarPrograma(3);
            break;
        case "0":
            iniciarProgramaGeral();
            break;
        default:
            console.log("Entrada incorreta!");
            console.log("Reiniciando o programa...");
            iniciarGerenciador3();
            break;
    }

}