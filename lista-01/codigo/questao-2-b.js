// questao-2-b.js
// Calcula o perímetro (circunferência) de um círculo

function perimetroCirculo(raio) {
  const r = Number(raio);
  if (isNaN(r) || r < 0) throw new Error("Raio inválido.");
  return 2 * Math.PI * r;
}

// Interativo:
function executarPerimetroInterativo() {
  const raio = prompt("Informe o raio do círculo:");
  try {
    const p = perimetroCirculo(raio);
    alert("Perímetro: " + p.toFixed(2));
  } catch (e) {
    alert(e.message);
  }
}

// executarPerimetroInterativo();
window.perimetroCirculo = perimetroCirculo;
