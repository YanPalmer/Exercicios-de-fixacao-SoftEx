import { prompt } from "..";

export function exercicio3() {
    console.log("Programa que verifica se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400)...");

    let ano = prompt("Digite o ano atual ou aleatório: ");
    let boleano = verificarAno(ano);

    if (boleano == true) {
        console.log(`O ano ${ano} é Bissexto`);
    } else if (boleano == false) {
        console.log(`O ano ${ano} não é Bissexto`);
    } else {
        console.log("O valor inserido não é um número!");
        console.log("Tente novamente...");
        exercicio3();
    }
}

function verificarAno(ano: number) {
    if (ano % 400 == 0) {
        return true;
    } else if (ano % 100 == 0) {
        return false;
    } else if (ano % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

// OK