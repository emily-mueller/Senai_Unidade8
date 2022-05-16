let listaDeAlunos = ["Ordilei", "Jésicca", "Leandro", "Nicolle", "Alex", "Emily"];

for(let contador = 0; contador < listaDeAlunos.length; contador++){

    for (let nome of listaDeAlunos) {
    if (contador == 0) {
    {
        console.log(`Esta pessoa se chama ${nome} seu numero é 0`);

        }

    }
    else if (contador % 2 == 0) {
        console.log(`Esta pessoa se chama ${nome} seu numero é `  + contador +  ` e é par `);
    }

    else  { 
        (contador % 2 !== 0) 
        console.log(`Esta pessoa se chama ${nome} o numero ${contador} e é impar`);

        }
        contador ++
    }
}

