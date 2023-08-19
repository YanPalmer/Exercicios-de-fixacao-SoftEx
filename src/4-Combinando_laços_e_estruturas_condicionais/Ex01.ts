// Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex"

export function exercicio1() {
    console.log("Programa que imprime os números de 1 a 50, mas para múltiplos de 3 imprima \"Sof\" e para múltiplos de 5 imprima \"Tex\"");

    let multiploDe3: number[] = [];
    let multiploDe5: number[] = [];
    let multiplos3: number = 0;
    let multiplos5: number = 0;

    function armazenarMultiplosDe3() {
        for (let i = 0; multiplos3 < 50; i++) {
            multiplos3 = 3 * i;
            multiploDe3.push(multiplos3);
        }
        // console.log(multiploDe3);
    }
    function armazenarMultiplosDe5() {
        for (let i = 0; multiplos5 < 50; i++) {
            multiplos5 = 5 * i;
            multiploDe5.push(multiplos5);
        }
        // console.log(multiploDe5);
    }
    function imprimirNumeros() {
        for (let i = 1; i <= 50; i++) {
            if (multiploDe3.includes(i) && multiploDe5.includes(i)) {
                console.log(`Numero ${i} "SofTex"`);
            } else if (multiploDe3.includes(i)) {
                console.log(`Numero ${i} "Sof"`);
            } else if (multiploDe5.includes(i)) {
                console.log(`Numero ${i} "Tex"`);
            } else {
                console.log(`Numero ${i}`);
            }
        }
    }

    armazenarMultiplosDe3();
    armazenarMultiplosDe5();
    imprimirNumeros();
}