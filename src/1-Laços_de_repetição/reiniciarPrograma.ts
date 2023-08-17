import { iniciarPrograma } from "./gerenciador1";
import { prompt } from "./gerenciador1";

export let reiniciarPrograma = function reiniciarPrograma() {
    let escolhaDeReinicio: number;
    console.log();
    console.log("Gostaria de reiniciar?");
    console.log("1 - Sim");
    console.log("2 - Não");
    escolhaDeReinicio = Number(prompt("Digite sua escolha: "));
    
    switch (escolhaDeReinicio) {
        case 1:
            iniciarPrograma();
            break;
        case 2:
            console.log("Fím do código...");
            break;
        default:
            break;
    }
}