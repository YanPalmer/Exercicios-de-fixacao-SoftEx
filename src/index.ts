import { iniciarGerenciador1 } from "./1-Laços_de_repetição/gerenciador1";
import { iniciarGerenciador2 } from "./2-Estruturas_de_controle_condicionais/gerenciador2";
import { iniciarGerenciador3 } from "./3-Outros_conceitos_basicos/gerenciador3";
import { iniciarGerenciador4 } from "./4-Combinando_laços_e_estruturas_condicionais/gerenciador4";
import { iniciarGerenciador5 } from "./5-Trabalhando_com_strings/gerenciador5";
import { iniciarGerenciador6 } from "./6-Arrays/gerenciador6";

export const prompt = require("prompt-sync")();
let assunto: string;

export function iniciarProgramaGeral() {
    console.log();
    console.log("=================================================");
    console.log("Bem vindo a lista de exercícios de \"Yan Palmer\"!");
    console.log("Escolha o ASSUNTO: ");
    console.log("1 - Laços_de_repetição");
    console.log("2 - Estruturas_de_controle_condicionais");
    console.log("3 - Outros_conceitos_básicos");
    console.log("4 - Combinando_laços_e_estruturas_condicionais");
    console.log("5 - Trabalhando_com_strings");
    console.log("6 - Arrays");
    assunto = prompt("Digite o número: ");
    console.log();

    switch (assunto) {
        case "1":
            iniciarGerenciador1();
            break;
        case "2":
            iniciarGerenciador2();
            break;
        case "3":
            iniciarGerenciador3();
            break;
        case "4":
            iniciarGerenciador4();
            break;
        case "5":
            iniciarGerenciador5();
            break;
        case "6":
            iniciarGerenciador6();
            break;

        default:
            console.log("Entrada incorreta!");
            console.log("Reiniciando o programa...");
            iniciarProgramaGeral();
            break;
    }
}

iniciarProgramaGeral();