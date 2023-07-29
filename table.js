const readline = require('readline-sync');

function printTable(number) {
  for (let i = 1; i <= 10; i++) {
    if (i === 1) {
      console.log("\n");
    }

    console.log(`| ${number} X ${i} = ${number * i} |`);

    if (i === 10) {
      console.log("\n");
    }
  }
}

(function table() {
  try {
    while (true) {
      const number = readline.questionInt("Type a number to display the table:\nType 0 to exit\n");

      if (number === 0) {
        return;
      }

      printTable(number);
    }
  } catch (error) {
    console.log("\nInvalid input. Please, type an integer number.\n");
    table();
  }
})()