// Imprima os múltiplos de 3 de 0 a 30 utilizando um loop for

export let exercicio6 = function exercicio6() {
    console.log("Programa que imprime os múltiplos de 3 de 0 a 30 utilizando um loop for...");

    let tres = 3;
    let multiplos = 0;
    for (let i = 0; multiplos < 30; i++) {
        multiplos = tres * i;
        console.log(multiplos);
    }
}

// OK