let numero = [30, 20, 45, 12, 11, 10, 4, 5, 32, 12];

let menor = 0, maior = 0, soma = 0;
let n = numero.length;
//console.log(n);

// Reordenando o vetor em ordem crescente usando Bubble Sort(tipo de alg para ordenar)
for (let i = 0; i < n - 1; i++) {
    
    for (let j = 0; j < n - i - 1; j++) {
        if (numero[j] > numero[j + 1]) { //ex1a passagem j vale 0 (pos 30) e j+1 seria posicao 2(pos 1)
            let temp = numero[j]; //temp 0(30)
            numero[j] = numero[j + 1];
            numero[j + 1] = temp; //o temp é como se fosse trocar a var entre eles com essa terceira 
        }
    }
}

// Calculando a soma dos valores no vetor e encontrando o maior e menor valor
for (let i = 0; i < n; i++) {
    soma += numero[i];

    if (i == 0) {
        maior = numero[i];
        menor = numero[i];
    } else {
        if (numero[i] > maior) maior = numero[i];
        if (numero[i] < menor) menor = numero[i];
    }
}

console.log("Vetor ordenado:" + numero);
console.log("Soma dos números:\n"+ soma);
console.log("Menor número:" + menor);
console.log("Maior número:", maior); //, dá espaço e + precisa dar um espaço no texto.
