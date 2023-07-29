const readline = require('readline-sync');

function isPrime(number) {
  if (number < 2) {
    return false;
  } else if (number === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function isDecimal(str) {
    const decimalRegex = /^[-+]?\d*\.\d+$/;
  
    return decimalRegex.test(str);
}

function checkIfNumberIsPrime() {
  while (true) {
    const number = readline.question("\nCheck if a number is prime or not. To exit type 'exit'. \nType a number to check: \n");

    
    if (number.toLowerCase() === 'exit') {
        return;
    }
    
    if (isDecimal(number)) {
        console.log(`opa`);
        console.log(`The number ${number} is not prime\n`);
    } else if (parseInt(number) < 0) {
      console.log(`The number ${number} is not prime\n`);
    } else {
      if (isPrime(parseInt(number))) {
        console.log(`The number ${number} is prime\n`);
      } else {
        console.log(`The number ${number} is not prime\n`);
      }
    }
  }
}

function printFirstTenPrimeNumbers() {
  const primes = [];
  let num = 2;

  while (primes.length < 10) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  console.log(primes);
}

(function check() {
  try {
    while (true) {
      const op = readline.questionInt("Type 1 to check if a number is prime or not\nType 2 to print the first 10 numbers\nType 0 to exit\n");

      if (op === 1) {
        checkIfNumberIsPrime();
      } else if (op === 2) {
        printFirstTenPrimeNumbers();
      } else if (op === 0) {
        console.log("Finalizing the program.");
        break;
      } else {
        console.log("Invalid option. Please, type 1, 2 or 0.");
      }
    }
  } catch (error) {
    console.log("Invalid Input. Please enter an integer.");
  }
})()
