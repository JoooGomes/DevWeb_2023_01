var notaMarcos = 8
var notaMinima = 7

if(notaMarcos >= notaMinima){
    console.log("você está aprovado")
}else{
    console.log("você está reprovado")
}


// impar o par
// se a sobra da divisão do número por 2 for
// 1 esse número é impar
// se a sobra da divisão do número por 2 for
// 0 esse número é par

var imparPar = 10

if(10 % 2 == 1){
    console.log("é impar")
}else{
    console.log("é par")
}
//validação encadeada
//primeira validação se é par 
//segunda validação número maior que 10
// o número é par e maior que 10
//o número é par e porem é menor que 10
var imparPar2 = 10
if(imparPar2 % 2 == 1){
    console.log("é impar")
}else{
    if(imparPar2 > 10){
        console.log("o número é par e maior que 10")
    }else{
        console.log("o número é par e porem é menor que 10")
    }
}



if(4 > 7){
    console.log("aprovado")
}else if(4 < 6.9 && 4>5){
    console.log("aprovado por conselho")
}else{
    console.log("reprovado")
}

/////////////////////////////////////////

var notaAluno = 5
switch( notaAluno > 7){
    case true:
    console.log("aprovado")
    break;
    case false:
    console.log("reprovado")    
    break;    
}


