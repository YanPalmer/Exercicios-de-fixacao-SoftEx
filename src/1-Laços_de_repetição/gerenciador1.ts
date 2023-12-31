import { iniciarProgramaGeral, prompt } from "..";
import { exercicio1 } from "./Ex01";
import { exercicio2 } from "./Ex02";
import { exercicio3 } from "./Ex03";
import { exercicio4 } from "./Ex04";
import { exercicio5 } from "./Ex05";
import { exercicio6 } from "./Ex06";
import { reiniciarPrograma } from "../reiniciarPrograma";

let exercicio: string;

export function iniciarGerenciador1() {
    console.log("=================================================");
    console.log("Bem vindo a lista de exercícios de laços de repetição!");
    console.log("Escolha qual exercício será executado: ");
    console.log("1 - Imprima os números de 1 a 10 utilizando um loop for");
    console.log("2 - Calcule a soma dos números de 1 a 100 utilizando um loop while");
    console.log("3 - Imprima os números pares de 0 a 20 utilizando um loop for");
    console.log("4 - Calcule o produto dos números de 1 a 5 utilizando um loop do...while");
    console.log("5 - Crie um loop que imprima a sequência de Fibonacci até o 10º termo");
    console.log("6 - Imprima os múltiplos de 3 de 0 a 30 utilizando um loop for");
    console.log("0 - Voltar");
    exercicio = prompt("Digite o número: ");
    console.log();

    switch (exercicio) {
        case "1":
            exercicio1();
            reiniciarPrograma(1);
            break;
        case "2":
            exercicio2();
            reiniciarPrograma(1);
            break;
        case "3":
            exercicio3();
            reiniciarPrograma(1);
            break;
        case "4":
            exercicio4();
            reiniciarPrograma(1);
            break;
        case "5":
            exercicio5();
            reiniciarPrograma(1);
            break;
        case "6":
            exercicio6();
            reiniciarPrograma(1);
            break;
        case "0":
            iniciarProgramaGeral();
            break;
        default:
            console.log("Entrada incorreta!");
            console.log("Reiniciando o programa...");
            iniciarGerenciador1();
            break;
    }

}


/*
function soma() {
    return 900
}

function soma2(a: number, b: number) {
    console.log(a + b);

}

let resultado2 = soma2();
*/