function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;

    if (operacao === "soma") {
        resultado = num1 + num2;
    } else if (operacao === "sub") {
        resultado = num1 - num2;
    } else if (operacao === "mult") {
        resultado = num1 * num2;
    } else if (operacao === "div") {
        if (num2 === 0) {
            resultado = "Erro: divisão por zero";
        } else {
            resultado = num1 / num2;
        }
    } else if (operacao === "quad") {
        resultado = num1 * num1;
    } else if (operacao === "cubo") {
        resultado = num1 * num1 * num1;
    } else if (operacao === "raiz") {
        if (num1 < 0) {
            resultado = "Não existe raiz real";
        } else {
            resultado = Math.sqrt(num1);
        }
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}