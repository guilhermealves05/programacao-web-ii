// questao-3-b.js
// Calcula o produtório (produto) de uma sequência de números

function produtorio(...numeros) {
  if (numeros.length === 0) return 0;
  return numeros.reduce((total, n) => total * n, 1);
}

// Exemplo:
// console.log(produtorio(2, 3, 4)); // 24
window.produtorio = produtorio;
