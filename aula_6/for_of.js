const listaDeNumeros = [1, 2, 3, 4, 5, 6, -8, -4]
const usuarios = ["João", "Antonio"]
//código imperativo//feito para máquina
//for (let contador = 0; contador < listaDeNumeros.length; contador++) {
//    console.log(listaDeNumeros[contador])
//}

//código declarativo// maior compreensão humana
for (let numero of listaDeNumeros) {
    console.log(numero)
}

for (const usuario of usuarios) {
    console.log(usuario)
}