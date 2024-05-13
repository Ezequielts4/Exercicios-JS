/*
Exercício 5: Verificação de números em ordem crescente

Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. 
Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.
*/

let a = parseFloat(prompt("Insira o primeiro número: "));
let b = parseFloat(prompt("Insira o segundo número: "));
let c = parseFloat(prompt("Insira o terceiro número: "));

if (a < b && b < c)
    {
        alert("Estão em ordem crescente!");
    }
else
    {
        alert("Não estão em ordem crescente!");
    }

/* DESAFIO - DESAFIO - DESAFIO - DESAFIO - DESAFIO - DESAFIO - DESAFIO - DESAFIO */

/* Informe se os números estão em ordem crescente, decrescente ou não ordenado */

/*
let a = parseFloat(prompt("Insira o primeiro número: "));
let b = parseFloat(prompt("Insira o segundo número: "));
let c = parseFloat(prompt("Insira o terceiro número: "));

if (a < b && b < c)
    {
        alert("Estão em ordem crescente!");
    }
else if (a > b && b > c)
    {
        alert("Estão em ordem decrescente!");
    }

else
    {
        alert("Ordem não ordenada!")
    }
*/