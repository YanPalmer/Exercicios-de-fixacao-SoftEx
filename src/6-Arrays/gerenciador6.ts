import { iniciarProgramaGeral, prompt } from "..";
import { reiniciarPrograma } from "../reiniciarPrograma";
import { exercicio1 } from "./Ex01";
import { exercicio2 } from "./Ex02";

let exercicio: string;

export function iniciarGerenciador6() {
    console.log("=================================================");
    console.log("Bem vindo a lista de exercícios de Arrays!");
    console.log("Escolha qual exercício será executado: ");
    console.log("1 - Crie um array de números e ordene-o em ordem crescente");
    console.log("2 - Encontre o maior valor em um array de números");
    console.log("3 - Crie um array de nomes e ordene-o em ordem alfabética");
    console.log("4 - Crie um programa que some os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados");
    console.log("5 - Crie um programa que encontre o valor mais frequente em um array de números");
    console.log("0 - Voltar");
    exercicio = prompt("Digite o número: ");
    console.log();

    switch (exercicio) {
        case "1":
            exercicio1();
            reiniciarPrograma(6);
            break;
        case "2":
            exercicio2();
            reiniciarPrograma(6);
            break;
        case "3":
            // exercicio3();
            reiniciarPrograma(6);
            break;
        case "4":
            // exercicio4();
            reiniciarPrograma(6);
            break;
        case "5":
            // exercicio5();
            reiniciarPrograma(6);
            break;
        case "0":
            iniciarProgramaGeral();
            break;
        default:
            console.log("Entrada incorreta!");
            console.log("Reiniciando o programa...");
            iniciarGerenciador6();
            break;
    }

}