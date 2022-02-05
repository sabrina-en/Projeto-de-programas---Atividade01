/* 
    Nome: Sabrina Millane Oliveira da Silva
    email: smos.eng18@uea.edu.br
    Matricula: 1815080041
*/

/* Detectar se é um numero par ou impar */
var num = 5;

if(num % 2 == 0){
    console.log('É par')
}else{
    console.log('É impar')
}


/* Multiplicar números sem utilizar o operador de multiplicação(*) */

var a = 2;
var b = 2;
var r =0;

for (i = 0; i<b ; i++){
    r += a;
}
console.log('O valor é:',r)

/* Contar a quantidade de vogais de um texto */

var texto = 'Sabrina'.toLowerCase();
var vogal = ['a', 'b', 'c','d','e'];
s = 0;

for(i = 0 ; i < texto.length; i++){
    if(vogal.indexOf(texto[i]) != -1){
        s++;
    }
}
console.log('Quantidade de vogais é: ',s);