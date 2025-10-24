// questao-3-e.js
// Calcula o valor total com desconto (desconto padrão = 0)

function valorTotal(valorUnitario, quantidade, desconto = 0) {
  const v = Number(valorUnitario);
  const q = Number(quantidade);
  const d = Number(desconto);
  if (isNaN(v) || isNaN(q) || q < 0) throw new Error("Valores inválidos.");
  const total = v * q - d;
  return total < 0 ? 0 : total;
}

// Exemplo:
// console.log(valorTotal(10, 3, 5)); // 25
window.valorTotal = valorTotal;
