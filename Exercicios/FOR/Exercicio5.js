// Imprimir os primeiros 10 números da sequência de Fibonacci.

let primeiro = 0;
let anterior = 0;
let proximo = 1;

console.log(proximo);

for(let i = 1; i <=10; i++)
    {
        let soma = anterior + proximo;
        anterior = proximo;
        proximo = soma;
        console.log(soma);
    }
