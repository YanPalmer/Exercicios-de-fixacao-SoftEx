import { prompt } from ".";
import { iniciarGerenciador1 } from "./1-Laços_de_repetição/gerenciador1";
import { iniciarGerenciador2 } from "./2-Estruturas_de_controle_condicionais/gerenciador2";
import { iniciarGerenciador3 } from "./3-Outros_conceitos_basicos/gerenciador3";
import { iniciarGerenciador4 } from "./4-Combinando_laços_e_estruturas_condicionais/gerenciador4";

export function reiniciarPrograma(gerenciador: number) {
    let escolhaDeReinicio: number;
    console.log();
    console.log("Gostaria de reiniciar?");
    console.log("1 - Sim");
    console.log("2 - Não");
    escolhaDeReinicio = Number(prompt("Digite sua escolha: "));
    console.log();
    
    switch (escolhaDeReinicio) {
        case 1:
            if (gerenciador == 1) {
                iniciarGerenciador1();
            } else if (gerenciador == 2) {
                iniciarGerenciador2();
            } else if (gerenciador == 3) {
                iniciarGerenciador3();
            } else if (gerenciador == 4) {
                iniciarGerenciador4();
            }
            break;
        case 2:
            console.log("Fím do código...");
            break;
        default:
            console.log("Valor não identificado. Tente novamente...");
            reiniciarPrograma(gerenciador);
            break;
    }
}