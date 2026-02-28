# Calculadora-Basica---Web
Calculadora em um projeto WEB (HTML + CSS + JavaScript)

# 🌐 Calculadora Web

Aplicação web de calculadora com múltiplas operações matemáticas.

## 🚀 Funcionalidades
- Soma
- Subtração
- Multiplicação
- Divisão
- Quadrado
- Cubo
- Raiz quadrada

## 🛠 Tecnologias
- HTML
- CSS
- JavaScript

## ▶️ Como executar

Abra o arquivo `index.html` no navegador.

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Calculadora Web</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>🔢 Calculadora</h1>

        <input type="number" id="num1" placeholder="Digite o primeiro número">
        <input type="number" id="num2" placeholder="Digite o segundo número">

        <select id="operacao">
            <option value="soma">Soma</option>
            <option value="sub">Subtração</option>
            <option value="mult">Multiplicação</option>
            <option value="div">Divisão</option>
            <option value="quad">Quadrado</option>
            <option value="cubo">Cubo</option>
            <option value="raiz">Raiz quadrada</option>
        </select>

        <button onclick="calcular()">Calcular</button>

        <h2 id="resultado">Resultado: </h2>
    </div>

    <script src="script.js"></script>
</body>
</html>
