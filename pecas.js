var listadePecas = ["Motor", "Amortecedor", "Freio", "Cambio", "Disco de freio", "Radiador"]

if (listadePecas.length < 10){
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista")
}
let peso = 50;

if(peso < 100){
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}
let nomePeca = "Disco de freio"

if(nomePeca.length > 3){
    console.log("Nome de peça está adequada para o cadastro!")
} else if (nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio")
} else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}

//switch (nomePeca.length) {
 //   case 0:
 //       console.log("O nome da peça não pode ser vazio")
        
 //       break;

 //   case 1:
 //   case 2:
 //   case 3: 
//        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")           

 //   default:
//        console.log("Nome de peça está adequado para o cadastro")
//       break;
//}

// = -> atribuição de valor
// == -> verificação se os valores são iguais
// === -> verificação se o valor e o tipo são iguais

