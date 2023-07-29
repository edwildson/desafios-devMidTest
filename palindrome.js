const readline = require('readline-sync');

function checkIfIsPalindrome(word) {
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}

(function check() {
  try {
    while (true) {
      const word = readline.question("Type a word to check if it is a palindrome:\nType 0 to exit\n");

      if (word === '0') {
        return;
      }

      const result = checkIfIsPalindrome(word);

      if (result) {
        console.log(`\n${word} is a palindrome\n`);
      } else {
        console.log(`\n${word} is not a palindrome\n`);
      }
    }
  } catch (error) {
    console.log("\nInvalid input. Please, type a word.\n");
    check();
  }
})()