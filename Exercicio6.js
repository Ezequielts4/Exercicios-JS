/*
Exercício 6: Verificação de idade

Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos.
Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
*/

let nasc = parseInt(prompt("Insira apenas o ano de seu nascimento: "));

/* let anoAtual = new Date().getFullYear(); */
if (2024 - nasc >= 18)
    {
        alert("MAIOR de idade!");
    }
else
    {
        alert("MENOR de idade!");
    }