// Calcule a soma dos números de 1 a 100 utilizando um loop while

export let exercicio1a = function exercicio1a() {
    let x = 1;
    let soma = 0;
    while (x <= 100) {
        soma += x;
        x++;
        console.log(soma);
    };
};