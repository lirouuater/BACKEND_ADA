const temCNH = true;
const idade=19
const podeDirigir = idade > 18 && temCNH
let numeroDePassageiros = 0

if(podeDirigir) {
    console.log("pessoa esta habilitada para dirigir veículo");
    numeroDePassageiros = 4
}else{
    console.log("pessoa não esta habilitada para dirigir veículo");
}

console.log({numeroDePassageiros});


