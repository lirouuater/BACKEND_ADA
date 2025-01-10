const nomeDeUsuarios = ["joao", "maria", "pedro", "josé", "leticia"];

//console.log("Olá!", nomeDeUsuarios[0]);
//console.log("Olá!", nomeDeUsuarios[1]);
//console.log("Olá!", nomeDeUsuarios[2]);
//console.log("Olá!", nomeDeUsuarios[3]);

let indiceDoUsuario = 0;
let indiceAtual = nomeDeUsuarios.length;

console.log({indiceAtual});

while (indiceDoUsuario < indiceAtual) {
    console.log("olá", nomeDeUsuarios[indiceDoUsuario]);
    indiceDoUsuario = indiceDoUsuario + 1
}