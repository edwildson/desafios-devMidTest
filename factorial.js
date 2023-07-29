const readline = require('readline-sync');

function factorial(number) {
  if (number === 0) return 1;
  let aux = 1;
  for (let i = 1; i <= number; i++) {
    aux *= i;
  }
  return aux;
}

(function check() {
  try {
    while (true) {
      const number = readline.questionInt("Type a number to calculate the factorial:\nType -1 to exit\n");

      if (number === -1) {
        return;
      }

      console.log(`\nThe factorial is: ${factorial(number)}\n`);
    }
  } catch (error) {
    console.log("\nInvalid input. Please, type an integer number.\n");
    check();
  }
})()
