
let num1 = Number(prompt("1. Digite o primeiro número: "));
let num2 = Number(prompt("2. Digite o segundo número: "));
alert("Resultado da soma: " + (num1 + num2));


var global = "variavel global";

console.log(global);

function exemplo2(){
    var local = "Variavel local";
    console.log(local);

}

exemplo2();
// console.log(local);

let x = 10;
if (x  > 5)   {
    let y = 20;
    console.log("Valor de y: ", y);
}
// console.log(y);
console.log(x);

const_constante = "texto";
_constante = "outro texto";
console.log(_constante);

function saudacao(){

    alert("Bem vindo ao nosso site 3!");
}