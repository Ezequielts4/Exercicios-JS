// Imprimir os primeiros 10 números da sequência de Fibonacci.

/*
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
*/

// correção - correção - correção - correção - correção - correção 

let fib1 = 1; 
let fib2 = 1;

console.log("Os primeiros 10 números da sequência de Fibonacci são: ");
console.log(fib1);
console.log(fib2);

for(i = 2; i < 10; i++)
    {
        let nextFib = fib1 + fib2;
        console.log(nextFib)

        fib1 = fib2;
        fib2 = nextFib;
    }
