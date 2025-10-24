// questao-3-a.js
// Função que executa operação matemática com base em um operador

function operacaoSimples(a, b, operador) {
  const x = Number(a);
  const y = Number(b);
  switch (operador) {
    case "+": return x + y;
    case "-": return x - y;
    case "*": return x * y;
    case "/":
      if (y === 0) throw new Error("Divisão por zero.");
      return x / y;
    default:
      throw new Error("Operador inválido.");
  }
}

// Exemplo:
// console.log(operacaoSimples(4, 2, "+")); // 6
window.operacaoSimples = operacaoSimples;
