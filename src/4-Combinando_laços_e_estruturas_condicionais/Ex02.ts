// Crie um programa que imprima a tabela de multiplicação de 1 a 10

export function exercicio2() {
    console.log("Programa que imprime a tabela de multiplicação de 1 a 10");

    function tabuadas() {
        for (let i = 1; i <= 10; i++) {
            console.log(`Tabuada do: ${i}`);
            for (let j = 1; j <= 10; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }
            console.log();
        }
    }
    tabuadas();
}

// OK