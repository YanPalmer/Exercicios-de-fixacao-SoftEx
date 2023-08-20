import { iniciarProgramaGeral, prompt } from "..";
import { reiniciarPrograma } from "../reiniciarPrograma";
import { exercicio1 } from "./Ex01";
import { exercicio2 } from "./Ex02";
import { exercicio3 } from "./Ex03";
import { exercicio4 } from "./Ex04";

let exercicio: string;

export function iniciarGerenciador5() {
    console.log("=================================================");
    console.log("Bem vindo a lista de exercícios de Trabalhando com strings!");
    console.log("Escolha qual exercício será executado: ");
    console.log("1 - Conte quantas vogais há em uma string");
    console.log("2 - Converta uma string para maiúsculas");
    console.log("3 - Remova os espaços em branco de uma string");
    console.log("4 - Conte quantas ocorrências de uma determinada letra existem em uma string");
    console.log("0 - Voltar");
    exercicio = prompt("Digite o número: ");
    console.log();

    switch (exercicio) {
        case "1":
            exercicio1();
            reiniciarPrograma(5);
            break;
        case "2":
            exercicio2();
            reiniciarPrograma(5);
            break;
        case "3":
            exercicio3();
            reiniciarPrograma(5);
            break;
        case "4":
            exercicio4();
            reiniciarPrograma(5);
            break;
        case "0":
            iniciarProgramaGeral();
            break;
        default:
            console.log("Entrada incorreta!");
            console.log("Reiniciando o programa...");
            iniciarGerenciador5();
            break;
    }

}