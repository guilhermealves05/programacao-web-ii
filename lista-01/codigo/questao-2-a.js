// questao-2-a.js
// Converte valor em reais para dólar

function converterReaisParaDolar(valorReais, cotacaoDolar) {
  const reais = Number(valorReais);
  const cotacao = Number(cotacaoDolar);
  if (isNaN(reais) || isNaN(cotacao) || cotacao <= 0) {
    throw new Error("Entradas inválidas.");
  }
  return reais / cotacao;
}

// Interativo:
function executarConversaoInterativa() {
  const valor = prompt("Informe o valor em R$:");
  const cotacao = prompt("Informe a cotação do dólar:");
  try {
    const resultado = converterReaisParaDolar(valor, cotacao);
    alert("Valor em US$: " + resultado.toFixed(2));
  } catch (e) {
    alert(e.message);
  }
}

// executarConversaoInterativa();
window.converterReaisParaDolar = converterReaisParaDolar;
