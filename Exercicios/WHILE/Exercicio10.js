// Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.

let n = prompt("Insira um número: ");

while (n != 0) 
    {
        alert("INSIRA UM NÚMERO VÁLIDO!");
        n = prompt("Insira um número: ");
    }

console.log("Número aceito!");