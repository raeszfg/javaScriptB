//1 - soma simples
function somar() {

    let n1 = Number(document.getElementById("num1").value);
    //pega o valor de um input com id "num1", e converte para número e guarda na variável

    console.log(n1);
    //mostra o valor do n1 no console do navegador
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("soma").innerText = "Resultado: " + (n1 + n2);
    //mostra o resultado da soma de n1 e n2 dentro do id "soma"
}   

function verificar() {

    let idade = Number(document.getElementById("idade").value);
    let verificacao;
    //cria uma variavel chamada verificacao

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
    //salva no var resultado o total de caracteres da string texto.
    document.getElementById("caracteres").innerText = resultado;
}
function verificarParOuImpar() {
    let numero = Number(document.getElementById("numeroParOuImpar").value);
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
    //transforma a var nome em letras maiusculas

    document.getElementById("NomeConvertido").innerText = resultado;
}
function compararNumeros() {
    let n1 = document.getElementById("num1MaiorDe2Num").value;
    let n2 = document.getElementById("num2MaiorDe2Num").value;

    n1 = Number(n1);
    //garante que n1 seja um número
    n2 = Number(n2);
    let resultado;

    if (n1 > n2) {

        resultado = `${n1} é maior que ${n2}.`;
        //${n1} insere o valor da var n1 dentro de uma string usando crases(` `), crase indicam que você está usando uma template string(`texto`),
        // e dentro delas, você pode colocar variáveis usando ${...}
    } else if (n2 > n1) {
        resultado = `${n2} é maior que ${n1}.`;
    } else {
        resultado = "Os números são iguais.";
    }

    document.getElementById("Comparacao").innerText = resultado;
}
function gerarTabuada() {

    const numero = Number(document.getElementById("numTabuada").value);
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    document.getElementById("tabuada").innerHTML = resultado;
}
function contarAte10() {

    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + "<br>";
        //<br> = quebra de linha
    }
    document.getElementById("contador1A10").innerHTML = resultado;
}
function calcularMedia() {

    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);

    let media = (n1 + n2 + n3) / 3;
    let status = media >= 6 ? "Aprovado!" : "Reprovado.";
    //é um if simplificado (operador ternário): Se media for maior ou igual a 6, então status recebe "Aprovado!", se n, status recebe "Reprovado.".

    document.getElementById("calculo").innerText = `${status} Média: ${media.toFixed(2)}`;
    //media.toFixed(2) pega o número da variável media e arredonda para 2 casas decimais, transformando em uma string
}
function converterTemperatura() {

    let c = Number(document.getElementById("celsius").value);
    let f = (c * 9 / 5) + 32;
    document.getElementById("temperatura").innerText = `${c}°C = ${f.toFixed(2)}°F`;

}
function mostrarDia() {

    let num = Number(document.getElementById("diaDaSemana").value);
    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    //dias é um array com os nomes dos 7 dias da semana, do domingo ao sábado

    let resultado = (num >= 1 && num <= 7) ? dias[num - 1] : "Número inválido.";
    //verifica se num está entre 1 e 7 (inclusive), se sim, pega o dia da semana correspondente no array dias (array começa do índice 0, por isso num - 1), 
    // se não, retorna a mensagem "Número inválido."
    document.getElementById("dia").innerText = resultado;
}
function verificarSenha() {

    let senha = document.getElementById("senhaVerificacao").value;
    let resultado = senha === "1234" ? "Acesso permitido!" : "Senha incorreta.";
    // === compara valor e tipo das variáveis
    document.getElementById("verificacaoSenha").innerText = resultado;
}
function contarRegressivamente() {
    
    let resultado = "";
    for (let i = 10; i >= 1; i--) {
        resultado += i + "<br>";
    }
    document.getElementById("Contagem").innerHTML = resultado;
}