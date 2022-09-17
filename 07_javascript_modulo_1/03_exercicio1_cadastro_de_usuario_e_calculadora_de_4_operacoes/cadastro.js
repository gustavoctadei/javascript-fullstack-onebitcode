let nome = prompt("Digite o nome:")
let sobrenome = prompt("Digite o sobrenome:")
let campoEstudo = prompt("Digite o campo de estudo:")
let anoNascimento = Number( prompt("Digite o ano de nascimento:") )

idade = new Date().getFullYear() - anoNascimento

let resultado = nome + " " + sobrenome + "\n"
resultado += campoEstudo + "\n"
resultado += idade

alert(resultado)