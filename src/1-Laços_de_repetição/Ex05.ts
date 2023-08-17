// Crie um loop que imprima a sequência de Fibonacci até o 10º termo

export let exercicio5 = function exercicio5() {
    console.log("Programa que cria um loop que imprime a sequência de Fibonacci até o 10º termo...");
    
    // Exemplo:
    // 0 + 1 = 1
    //     1 + 1 = 2
    //         1 + 2 = 3
    //             2 + 3 = 5..
    let fibonacciTerm = 1;
    let valor1 = 0;
    let valor2 = 1;
    let soma;
    while (fibonacciTerm <= 10) {
        soma = valor1 + valor2;
        valor1 = valor2;
        valor2 = soma;
        console.log(`FibonacciTerm ${fibonacciTerm}º: ${valor1} + ${valor2} = ${soma}`)
        fibonacciTerm++;
    }
}

// OK