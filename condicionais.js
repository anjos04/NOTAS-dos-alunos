var nota = 4
var nota2 = 7
var nota3 = 8
const total = (nota + nota2 + nota3) / 3

if (total >= 8){
    console.log('a sua nota foi ',total,'aprovado')
}if(!total < 8){
    console.log('a sua nota foi ',total,'recuperação')
}
else{
    if(!total < 5)
    {
        console.log('a sua nota foi ',total,'reprovação')
    }
}