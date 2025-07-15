//1 - soma simples
function somar() {

    let n1 = Number(document.getElementById("num1").value);


    console.log(n1);

    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}

function verificar() {

    let idade = Number(document.getElementById("idade").value);
    let verificacao;

    if (idade > 18) {
        verificacao = "Maior de 18";


    }
    else {
        verificacao = "Menor de 18";
    }


    document.getElementById("verificacao").innerText = verificacao;

}
function contarCaracter() {

    let texto = document.getElementById("texto").value;
    let resultado;

    resultado = "Total de caracteres: " + texto.length;

    document.getElementById("resultado").innerText = resultado;
}
function verificarParOuImpar() {
    let numero = Number(document.getElementById("numero").value);
    let resultado;

    if (numero % 2 === 0) {
        resultado = "É par.";
    } else {
        resultado = "É ímpar.";
    }

    document.getElementById("ParOuImpar").innerText = resultado;
}
function converterCaixaAlta() {
    let nome = document.getElementById("nome").value;
    let resultado = nome.toUpperCase();
    document.getElementById("NomeConvertido").innerText = resultado;
}
function compararNumeros() {
    let n1 = document.getElementById("num6a").value;
    let n2 = document.getElementById("num6b").value;

    if (n1 === "" || n2 === "") {
        document.getElementById("Comparacao").innerText = "Preencha os dois números.";
        return;
    }

    n1 = Number(n1);
    n2 = Number(n2);
    let resultado;

    if (n1 > n2) {
        resultado = `${n1} é maior que ${n2}.`;
    } else if (n2 > n1) {
        resultado = `${n2} é maior que ${n1}.`;
    } else {
        resultado = "Os números são iguais.";
    }

    document.getElementById("Comparacao").innerText = resultado;
}
function gerarTabuada() {
    const numero = Number(document.getElementById("numero7").value);
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    document.getElementById("resultado7").innerHTML = resultado;
}
function contarAte10() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + "<br>";
    }
    document.getElementById("resultado8").innerHTML = resultado;
}
function calcularMedia() {
    let n1 = Number(document.getElementById("nota9a").value);
    let n2 = Number(document.getElementById("nota9b").value);
    let n3 = Number(document.getElementById("nota9c").value);

    let media = (n1 + n2 + n3) / 3;
    let status = media >= 6 ? "Aprovado!" : "Reprovado.";

    document.getElementById("resultado9").innerText =
        `${status} Média: ${media.toFixed(2)}`;
}
function converterTemperatura() {
    let c = Number(document.getElementById("celsius10").value);
    let f = (c * 9 / 5) + 32;
    document.getElementById("resultado10").innerText = `${c}°C = ${f.toFixed(2)}°F`;
}
function mostrarDia() {
    let num = Number(document.getElementById("numero11").value);
    let dias = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    let resultado = (num >= 1 && num <= 7) ? dias[num - 1] : "Número inválido.";
    document.getElementById("resultado11").innerText = resultado;
}
function verificarSenha() {
    let senha = document.getElementById("senha12").value;
    let resultado = senha === "1234" ? "Acesso permitido!" : "Senha incorreta.";
    document.getElementById("resultado12").innerText = resultado;
}
function contarRegressivamente() {
    let resultado = "";
    for (let i = 10; i >= 1; i--) {
        resultado += i + "<br>";
    }
    document.getElementById("resultado13").innerHTML = resultado;
}