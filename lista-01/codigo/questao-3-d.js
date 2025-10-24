// questao-3-d.js
// Filtra apenas os números ímpares de um array

function filtrarImpares(arr) {
  if (!Array.isArray(arr)) throw new Error("Esperado um array.");
  return arr.filter(num => num % 2 !== 0);
}

// Exemplo:
// console.log(filtrarImpares([1,2,3,4,5])); // [1,3,5]
window.filtrarImpares = filtrarImpares;
