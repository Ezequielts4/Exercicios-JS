/*
Exercício 7: Cálculo de desconto progressivo

Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague.
Faça um programa para loja, que solicite o valor total da compra ao usuário e assim, aplique um desconto de acordo com o valor total da compra.

Siga a tabela:
Valor total da compra até R$ 100,00: sem desconto.
Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
Valor total da compra acima de R$ 200,00: desconto de 20%.
Exiba o valor final da compra com o desconto aplicado.
*/

let valor = parseFloat(prompt("Insira o valor total da sua compra: "));

if (valor <= 100.00)
    {
        alert("Sem desconto...");
        alert("Valor a pagar: R$ " + valor.toFixed(2));
    }

else if (valor > 100.00 && valor <= 200.00)
    {
        alert("Parabéns!!! Você recebeu um desconto de 10%");
        let desconto = valor * (10 / 100);
        let valorFinal = valor - desconto;
        alert("Valor a pagar: R$ " + valorFinal.toFixed(2) + " reais");
    }

else
    {
        alert("Parabéns!!! Você recebeu um desconto de 20%");
        let desconto = valor * (20 / 100);
        let valorFinal = valor - desconto;
        alert("Valor a pagar: R$ " + valorFinal.toFixed(2) + " reais");
    }