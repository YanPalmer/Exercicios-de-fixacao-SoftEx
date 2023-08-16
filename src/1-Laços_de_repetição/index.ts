const prompt = require("prompt-sync")();

let exercicio: String;

function iniciarPrograma() {
    console.log();
    console.log("=================================================");
    console.log("Bem vindo a lista de exercícios de laços de repetição!");
    console.log("Escolha qual exercício será executado: ");
    console.log("1 - Imprima os números de 1 a 10 utilizando um loop for");
    console.log("1a - Calcule a soma dos números de 1 a 100 utilizando um loop while");
    console.log("2 - Imprima os números pares de 0 a 20 utilizando um loop for");
    console.log("3 - Calcule o produto dos números de 1 a 5 utilizando um loop do...while");
    console.log("4 - Crie um loop que imprima a sequência de Fibonacci até o 10º termo");
    console.log("5 - Imprima os múltiplos de 3 de 0 a 30 utilizando um loop for");
    return prompt("Digite o número: ");

    switch (exercicio) {
        case "1":
            exercicio1();
            break;
        case "1a":

            break;
        case "2":

            break;
        case "3":

            break;
        case "4":

            break;
        case "5":

            break;

        default:
            break;
    }

}

function exercicio1() {
    console.log("Funcionou!")
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