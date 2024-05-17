// Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.

/*
let n = prompt("Insira um número: ");

while (n != 0) 
    {
        alert("INSIRA UM NÚMERO VÁLIDO!");
        n = prompt("Insira um número: ");
    }

console.log("Número aceito!");
*/

// correção - correção - correção - correção - correção

let numero;

do 
    {
        numero = parseInt(prompt("Digite um número (Digite 0 para sair): "));
    } 

while (numero !== 0);

console.log("Você digitou 0. O programa foi encerrado.");


