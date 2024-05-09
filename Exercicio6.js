/*
Exercício 6: Verificação de idade

Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos.
Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
*/

let nasc = parseInt(prompt("Insira apenas o ano de seu nascimento: "));

if (2024 - nasc >= 18)
    {
        console.log("MAIOR de idade!");
    }
else
    {
        console.log("MENOR de idade!");
    }