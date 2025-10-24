// questao-2-c.js
// Calcula média ponderada: N1 peso 2, N2 peso 3

function notaFinal(n1, n2) {
  const a = Number(n1);
  const b = Number(n2);
  if (isNaN(a) || isNaN(b)) throw new Error("Notas inválidas.");

  const media = (a * 2 + b * 3) / 5;
  const aprovado = media >= 7;
  return { media: media.toFixed(2), aprovado };
}

// Interativo:
function executarNotaInterativa() {
  const n1 = prompt("Digite a N1:");
  const n2 = prompt("Digite a N2:");
  const { media, aprovado } = notaFinal(n1, n2);
  alert(`Média: ${media} — ${aprovado ? "Aprovado" : "Reprovado"}`);
}

// executarNotaInterativa();
window.notaFinal = notaFinal;
