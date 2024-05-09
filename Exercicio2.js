/*
Exercício 2: Verificação de dia da semana

Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana e exibe o nome correspondente a esse dia.
Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.
*/

let dia = prompt("Insira um número de 1 a 7 para saber o dia da semana!")

if (dia == 1) 
    {
        console.log("Hoje é Segunda-feira");
    }
    else if ( dia == 2)
    {
        console.log("Hoje é Terça-feira");
    }
    else if ( dia == 3)
    {
        console.log("Hoje é Quarta-feira");
    }
    else if ( dia == 4)
    {
        console.log("Hoje é Quinta-feira");
    }
    else if ( dia == 5)
    {
        console.log("Hoje é Sexta-feira");
    }
    else if ( dia == 6)
    {
        console.log("Hoje é Sábado");
    }
    else if ( dia == 7)
    {
        console.log("Hoje é Domingo");
    }
else 
{
    console.log("Insira um número correspondente ao dia da semana!");
}