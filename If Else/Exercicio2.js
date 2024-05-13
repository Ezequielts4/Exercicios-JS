/*
Exercício 2: Verificação de dia da semana

Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana e exibe o nome correspondente a esse dia.
Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.
*/

let dia = prompt("Insira um número de 1 a 7 para saber o dia da semana!")

if (dia == 1) 
    {
        alert("Hoje é Segunda-feira");
    }
    else if ( dia == 2)
    {
        alert("Hoje é Terça-feira");
    }
    else if ( dia == 3)
    {
        alert("Hoje é Quarta-feira");
    }
    else if ( dia == 4)
    {
        alert("Hoje é Quinta-feira");
    }
    else if ( dia == 5)
    {
        alert("Hoje é Sexta-feira");
    }
    else if ( dia == 6)
    {
        alert("Hoje é Sábado");
    }
    else if ( dia == 7)
    {
        alert("Hoje é Domingo");
    }
else 
{
    alert("Insira um número correspondente ao dia da semana!");
}

/* opção com switch - opção com switch - opção com switch - opção com switch - opção com switch - opção com switch - opção com switch */

/* let diaSemana = prompt("Insira um número de 1 a 7 para saber o dia da semana");

switch (diaSemana) {
    case "1":
        console.log("Segunda-feira")
        break;

    case "2":
        console.log("Terça-feira")
        break;
        
    case "3":
        console.log("Quarta-feira")
        break;

    case "4":
        console.log("Quinta-feira")
        break;

    case "5":
        console.log("Sexta-feira")
        break;

    case "6":
        console.log("Sábado")
        break;

    case "7":
        console.log("Domingo")
        break;

    default:
        console.log("Insira um número correspondente ao dia da semana!")
        break;
}
*/
