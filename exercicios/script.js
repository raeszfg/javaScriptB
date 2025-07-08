//1 - soma simples
function somar() {

    let n1 = Number (document.getElementById("num1").value);


    console.log(n1);

    let n2 = Number (document.getElementById("num2").value);

    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}

function verificar() {

    let idade = Number (document.getElementById("idade").value);
    let verificacao;
   
        if(idade > 18) {
            verificacao = "Maior de 18";


        }
        else {
            verificacao = "Menor de 18";
        }


    document.getElementById("verificacao").innerText = verificacao;

}