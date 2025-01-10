const user ={
    name: "JoSe MarIa",
    email: "JOSEM@gmail.com",
    idade: 23,
    endereco: "rua x"
}

//for(const key in user){
 //   console.log(user[key]); // imprime os valores das chaves
    
//}

//for(const key in user){
 //   if(key === "email" || key === "name") { // se a chave for email ou name
 //       user[key] = "novo valor";  // muda o valor das chaves na condicional
  //  }



    

//}
//console.log(user);

for(const key in user){
    if(key === "email" || key === "name") {
        user[key] = user[key]. toLowerCase();
    } 

}
console.log(user);