import { iniciarPrograma } from "./1-Laços_de_repetição/gerenciador1";
import { prompt } from "./1-Laços_de_repetição/gerenciador1";

let assunto: string;

export function iniciarProgramaGeral() {
    console.log("=================================================");
    console.log("Bem vindo a lista de exercícios de \"Yan Palmer\"!");
    console.log("Escolha o ASSUNTO: ");
    console.log("1 - Laços_de_repetição");
    console.log("2 - Estruturas_de_controle_condicionais");
    assunto = prompt("Digite o número: ");
    console.log();

    switch (assunto) {
        case "1":
            iniciarPrograma();
            break;
        case "2":
            // exercicio2();
            // reiniciarPrograma();
            break;
        case "3":
            // exercicio3();
            // reiniciarPrograma();
            break;
        case "4":
            // exercicio4();
            // reiniciarPrograma();
            break;
        case "5":
            // exercicio5();
            // reiniciarPrograma();
            break;
        case "6":
            // exercicio6();
            // reiniciarPrograma();
            break;

        default:
            console.log("Entrada incorreta!");
            console.log("Reiniciando o programa...");
            // iniciarPrograma();
            break;
    }
}

iniciarProgramaGeral();