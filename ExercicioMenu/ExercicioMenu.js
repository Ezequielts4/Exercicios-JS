/* FUNÇÕES DECLARADAS - IF ELSE */ 

function verificarIdade() {
    let nasc = parseInt(prompt("Insira apenas o ano de seu nascimento: "));

    if (2024 - nasc >= 18)
    {
        alert("Você é MAIOR de idade!");
    }
    else
    {
        alert("Você é MENOR de idade!");
    }
    

}

function desconto() {
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

    
}

function IMC() {
    let peso = parseFloat(prompt("Insira o seu peso: "));
    let altura = parseFloat(prompt("Insira a sua altura: "));

    let imc = peso / (altura * altura);

    console.log(imc);

    if (imc < 18.5)
    {
        alert("Seu IMC é de: " + imc.toFixed(2) + "\nClassificação: Abaixo do Peso");
    }

    else if (imc >= 18.5 && imc <= 24.9)
    {
        alert("Seu IMC é de: " + imc.toFixed(2) + "\nClassificação: Peso Normal");
    }

    else if (imc >= 25.0 && imc <= 29.9)
    {
        alert("Seu IMC é de: " + imc.toFixed(2) + "\nClassificação: Sobrepeso");
    }

    else if (imc >= 30.0 && imc <= 34.9)
    {
        alert("Seu IMC é de: " + imc.toFixed(2) + "\nClassificação: Obesidade grau 1");
    }

    else if (imc >= 35.0 && imc <= 39.9)
    {
        alert("Seu IMC é de: " + imc.toFixed(2) + "\nClassificação: Obesidade grau 2");
    }

    else
    {
        alert("Seu IMC é de: " + imc.toFixed(2) + "\nClassificação: Obesidade grau 3");
    }

    
}

/* FUNÇÕES DECLARADAS - LOOP */ 

function tabuada() {
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

    
}

function contagemRegressiva() {
    let num = parseInt(prompt("Digite um número para a contagem regressiva: "));

console.log("A contagem regressiva está começando em: " + num);
while(num >= 0)
    {
        console.log(num);
        num--;
    }

console.log("Contagem regressiva finalizada!");

}

function numeroCerto() {
    let numero;
do 
    {
        numero = parseInt(prompt("Digite um número (Digite 0 para sair): "));
    } 

while (numero !== 0);

console.log("Você digitou 0. O programa foi encerrado.");

}

/* MENU - MENU MENU - MENU - MENU - MENU - MENU - MENU - MENU - MENU */

function menu() {
    let escolha;

while (escolha != "sair") {
    escolha = prompt("MENU\nDigite o número de acordo com a opção escolhida: " + "\n\n1 - Verificar a idade\n2 - Desconto nas compras \n3 - Descubra seu IMC \n4 - Tabuada \n5 - Contagem Regressiva \n6 - Adivinhe o número").toLowerCase();

    console.clear()

    switch (escolha) {
        case "1":
            console.log(verificarIdade());
            break;
        
        case "2":
            console.log(desconto());
            break;
    
        case "3":
            console.log(IMC());
            break;
    
        case "4":
            console.log(tabuada());
            break;
            
        case "5":
            console.log(contagemRegressiva());
            break;
        
        case "6":
            console.log(numeroCerto());
            break;
    
        default:
            break;
    }
}

alert("Menu encerrado. \nRecarregue a página para abri-lo novamente!")
}

menu()

