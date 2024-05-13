/*
Exercício 4: Notas escolares

Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.
*/

let n1 = parseFloat(prompt("Insira a primeira nota: "));
let n2 = parseFloat(prompt("Insira a segunda nota: "));
let n3 = parseFloat(prompt("Insira a terceira nota: "));
let n4 = parseFloat(prompt("Insira a quarta nota: "));

let media = (n1 + n2 + n3 + n4) / 4.0;

alert("A sua média foi de: " + media.toFixed(2));

if (media >= 7)
    {
        alert("\nAPROVADO");
    }
else if (media >= 5 && media < 7)
    {
        alert("\nRECUPERAÇÃO")
    }
else
    {
        alert("\nREPROVADO")
    }