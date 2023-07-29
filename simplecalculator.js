const readlineSync = require('readline-sync');

function realizarOperacao(op, num1, num2) {
  if (op === '+') {
    return num1 + num2;
  } else if (op === '-') {
    return num1 - num2;
  } else if (op === '/') {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Erro: Divisão por zero!";
    }
  } else if (op === '*') {
    return num1 * num2;
  } else {
    return "Operação inválida.";
  }
}

(function calculator() {
  console.log("Simple Calculator");
  console.log("Operações disponíveis: + (soma), - (subtração), / (divisão), * (multiplicação)");

  while (true) {
    const operadores = ['+', '-', '/', '*'];
    let operador = null;

    const operacao = readlineSync.question("Digite a operação desejada (ex: 2.33+3 ou escreva 'sair' para finalizar): \n");

    if (operacao.toLowerCase() === 'sair') {
      break;
    }

    for (const op of operadores) {
      if (operacao.includes(op)) {
        operador = op;
        break;
      }
    }

    if (operador) {
      const splitNumbers = operacao.split(operador);
      const num1 = parseFloat(splitNumbers[0]);
      const num2 = parseFloat(splitNumbers[1]);
      const resultado = realizarOperacao(operador, num1, num2);
      console.log(`Resultado da operação: ${resultado}`);
    } else {
      console.log("Operação inválida. Use um dos operadores: +, -, *, /");
    }
  }
})()