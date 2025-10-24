// questao-2-d.js
// Soma de números primos

function ehPrimo(num) {
  const n = Math.floor(Number(num));
  if (isNaN(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function somaPrimosEmArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Esperado um array.");
  return arr.reduce((soma, num) => (ehPrimo(num) ? soma + num : soma), 0);
}

// Interativo:
function executarSomaPrimosInterativo() {
  const qtd = parseInt(prompt("Quantos números vai digitar?"));
  const numeros = [];
  for (let i = 0; i < qtd; i++) {
    numeros.push(Number(prompt(`Número ${i + 1}:`)));
  }
  alert("Soma dos primos: " + somaPrimosEmArray(numeros));
}

// executarSomaPrimosInterativo();
window.ehPrimo = ehPrimo;
window.somaPrimosEmArray = somaPrimosEmArray;
