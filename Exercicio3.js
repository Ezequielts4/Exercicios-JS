/* Exercício 3: Ímpar ou par

Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.
*/

let x = parseInt(prompt("Insira um número: "));

if (x % 2 == 0)
    {
        alert("O número " + x + " é par");
    }
else
    {
        alert("O número " + x + " é ímpar");
    }