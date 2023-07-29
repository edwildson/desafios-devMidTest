const readline = require('readline-sync');

function countVowels(string) {
  const vowels = "aeiouAEIOUàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚãẽĩõũÃẼĨÕŨâêîôûÂÊÎÔÛ";
  let vowelCount = 0;

  for (const char of string) {
    if (vowels.includes(char)) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}

(function table() {
  try {
    while (true) {
      const text = readline.question("Type a text to count the number of vowels:\nType 0 to exit\n");

      if (text === '0') {
        return;
      }

      console.log(countVowels(text));
    }
  } catch (error) {
    console.log("\nInvalid input. Please, type a text.\n");
    table();
  }
})()
