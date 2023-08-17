import { prompt } from "..";
import { iniciarGerenciador1 } from "./gerenciador1";

export let reiniciarPrograma = function reiniciarPrograma() {
    let escolhaDeReinicio: number;
    console.log();
    console.log("Gostaria de reiniciar?");
    console.log("1 - Sim");
    console.log("2 - Não");
    escolhaDeReinicio = Number(prompt("Digite sua escolha: "));
    console.log();
    
    switch (escolhaDeReinicio) {
        case 1:
            iniciarGerenciador1();
            break;
        case 2:
            console.log("Fím do código...");
            break;
        default:
            console.log("Valor não identificado. Tente novamente...");
            reiniciarPrograma();
            break;
    }
}