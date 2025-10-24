// questao-3-f.js
// Objeto "Conta Bancária" com métodos depositar, sacar e informar saldo

function criarConta(numeroConta, saldoInicial = 0) {
  let saldo = Number(saldoInicial);
  const numero = numeroConta;

  return {
    numeroConta: numero,
    depositar(valor) {
      const v = Number(valor);
      if (v <= 0) throw new Error("Depósito inválido.");
      saldo += v;
      return saldo;
    },
    sacar(valor) {
      const v = Number(valor);
      if (v <= 0) throw new Error("Saque inválido.");
      if (v > saldo) throw new Error("Saldo insuficiente.");
      saldo -= v;
      return saldo;
    },
    informarSaldo() {
      const msg = `Conta ${numero} — Saldo: R$ ${saldo.toFixed(2)}`;
      alert(msg);
      return msg;
    },
    _getSaldo() { return saldo; } // Para testes
  };
}

// Exemplo:
// const conta = criarConta("12345-6", 100);
// conta.depositar(50); // 150
// conta.sacar(20); // 130
// conta.informarSaldo();
window.criarConta = criarConta;
