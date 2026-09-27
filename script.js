function calcular() {
    const operacao = document.getElementById("operacao").value;
    const primeiro = document.getElementById("num1").value.trim();
    const segundo = document.getElementById("num2").value.trim();
    const saida = document.getElementById("resultado");
    const binaria = ["soma", "sub", "mult", "div"].includes(operacao);

    if (!primeiro || (binaria && !segundo)) {
        saida.textContent = "Preencha os números necessários.";
        return;
    }
    const a = Number(primeiro);
    const b = Number(segundo);
    if (!Number.isFinite(a) || (binaria && !Number.isFinite(b))) {
        saida.textContent = "Digite números válidos.";
        return;
    }

    let resultado;
    switch (operacao) {
        case "soma": resultado = a + b; break;
        case "sub": resultado = a - b; break;
        case "mult": resultado = a * b; break;
        case "div": resultado = b === 0 ? "Divisão por zero." : a / b; break;
        case "quad": resultado = a * a; break;
        case "cubo": resultado = a * a * a; break;
        case "raiz": resultado = a < 0 ? "Não existe raiz real para número negativo." : Math.sqrt(a); break;
        default: resultado = "Operação inválida.";
    }
    saida.textContent = "Resultado: " + resultado;
}
