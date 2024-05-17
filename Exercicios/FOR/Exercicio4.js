// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let numero = prompt("Insira um número de 1 a 10: ");

for(let i = 0; i <= 10; i++)
    {
        console.log(numero * i);
    }

// correção - correção - correção - correção - correção

/*
let numero = parseInt(prompt("Insira um número de 1 a 10: "));

if(!isNaN(numero))
    {
        for(let i = 1; i <= 10; i++)
            {
                console.log(numero + " X " + i + " = " + numero * i);
            }
    }
else
    {
        alert("Por favor, digite apenas números...")
    }
*/


/*
console.log(IsNan("Hello Word")); // retorna true
console.log(IsNan(123)); // retorna false
*/






