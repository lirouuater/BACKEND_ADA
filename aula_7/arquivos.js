/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const path = require('node:path');
const fs = require('node:fs');

const filePath = path.join(process.cwd(), "aula_7", "texto.txt");
const fileOutPath = path.join(process.cwd(), "aula_7", "texto-com-linhas.txt");

console.time("manipular arquivos")

fs.readFile(filePath, {}, (erro, dados) => {
    if (erro) {
        console.log(`Erro na leitura do arquivo no caminho ${filePath}`);
        return;
    }
    const texto = dados.toString();
    const linhas = texto.split("\n");

    const linhasAjustadas = linhas.map((linha, index) => {
        return `${index + 1} - ${linha}`;
    });

    linhasAjustadas.forEach((linha) => {
        console.log(linha);
    });

    fs.writeFile(fileOutPath, linhasAjustadas.join("\n"), {}, (erro) => {
        if (erro) {
            console.log(`Erro na escrita do arquivo no caminho ${fileOutPath}`);
            return;
        }
        
        console.timeEnd("manipular arquivos")
    });


}); 