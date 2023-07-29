const readline = require('readline-sync');

function calculateInterest(initialCapital, interestRate, time) {
  return initialCapital * Math.pow(1 + interestRate/100, time);
}

(function interest() {
  try {
    while (true) {
      const capital = parseFloat(readline.question("Type the init capital:\n"));
      const rate = parseFloat(readline.question("\nType the interest rate (in months):\n"));
      const time = parseFloat(readline.question("\nType the investment time (in months):\n"));

      console.log(`\nThe final value is: ${calculateInterest(capital, rate, time)}\n`);

      const exit = readline.question("To exit type y or press Enter to continue\n");
      if (exit === "y") {
        return;
      }
    }
  } catch (error) {
    console.log("\nInvalid input. Please, type a text.\n");
    interest();
  }
})()
