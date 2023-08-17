// Calcule o produto dos números de 1 a 5 utilizando um loop do...while

export let exercicio4 = function exercicio4() {
    // 1 * 2 = 2
    // 2 * 3 = 6
    // 6 * 4 = 24
    // 24 * 5 = 120
    let i = 1;
    let prox = 2;
    do {
        i = i * prox;
        prox++;
        console.log(i)
    } while (prox <= 5);
}

// OK