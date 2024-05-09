/*
Exercício 5: Verificação de números em ordem crescente

Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. 
Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.
*/

let a = parseInt(prompt("Insira o primeiro número: "));
let b = parseInt(prompt("Insira o segundo número: "));
let c = parseInt(prompt("Insira o terceiro número: "));

if (a < b && b < c)
    {
        console.log("Estão em ordem crescente!");
    }
else
    {
        console.log("NÃO estão em ordem crescente!");
    }