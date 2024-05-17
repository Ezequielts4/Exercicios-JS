// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.


let idade = prompt("Insira a sua idade: ");

while (idade < 18) {
    alert("ACESSO NEGADO!")
    idade = prompt("Insira uma idade válida: ")
}

console.log("Acesso permitido")


// correção - correção - correção - correção - correção

/*
let idade = parseInt(prompt("Informa a sua idade: "));

while(idade < 18)
    {
        idade = parseInt(prompt("Você é menor de idade! Por favor, digite a sua idade novamente: "));
    }
console.log("Você é maior de idade. \nSua idade é de: " + idade + " anos");
*/