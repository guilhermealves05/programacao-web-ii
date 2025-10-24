// questao-3-c.js
// Calcula fatorial de um número usando recursão

function fatorial(n) {
  const num = Number(n);
  if (!Number.isInteger(num) || num < 0) throw new Error("Número inválido.");
  if (num <= 1) return 1;
  return num * fatorial(num - 1);
}

// Exemplo:
// console.log(fatorial(5)); // 120
window.fatorial = fatorial;
