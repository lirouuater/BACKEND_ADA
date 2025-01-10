// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const rl = require('readline');

const prompt = rl.createInterface({
    // eslint-disable-next-line no-undef
    input: process.stdin,
    // eslint-disable-next-line no-undef
    output: process.stdout  // Correção: 'output' em vez de 'outpu'
});





const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question(pergunta, (resposta) => resolve(resposta));
        } catch (error) {
            reject(error);
        }
    }),
    close: () => prompt.close()
};








//prompt.question("Qual seu número favorito?", (resposta) => {
 //   console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`);

    // Segunda pergunta após a primeira ser respondida
 //   prompt.question("Qual sua cor favorita?", (respostaCor) => {
 //       console.log(`Sua cor favorita é: ${respostaCor}`);  // Correção: Removido o parseInt
 //       prompt.close(); 
 //        // Fechar a interface apenas após a última pergunta
 //   });
//});




async function askUser() {
    const numero  = await promptPromise.question("Qual o seu numero favorito?");
    console.log(`O dobro do seu número favorito é: ${parseInt(numero) * 2}`);

    const cor = await promptPromise.question("Qual sua cor favorita?");
    console.log(`Sua cor favorita é : ${cor}`) 
    promptPromise.close();

};
askUser(); // aqui chamamos a função para que ela seja executada no Terminal





//promptPromise.question("Qual seu número favorito?", (resposta) => {
 //   console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`);
//});
    
    
    

