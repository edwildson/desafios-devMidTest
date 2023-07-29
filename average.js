const readline = require('readline-sync');

function gradeAverage(subject1, subject2, subject3) {
  return (subject1 + subject2 + subject3) / 3;
}

(function table() {
  try {
    while (true) {
      let subj1_grade = readline.question("Type the subject 1 grade:\n");
      while (isNaN(parseFloat(subj1_grade))) {
        subj1_grade = readline.question("Type a numeric input:\n");
      }

      let subj2_grade = readline.question("Type the subject 2 grade:\n");
      while (isNaN(parseFloat(subj2_grade))) {
        subj2_grade = readline.question("Type a numeric input:\n");
      }

      let subj3_grade = readline.question("Type the subject 3 grade:\n");
      while (isNaN(parseFloat(subj3_grade))) {
        subj3_grade = readline.question("Type a numeric input:\n");
      }

      console.log(`The average of the grades is: ${gradeAverage(parseFloat(subj1_grade), parseFloat(subj2_grade), parseFloat(subj3_grade))}`);

      const exit = readline.question("To exit type y or press Enter to continue\n");
      if (exit === "y") {
        return;
      }
    }
  } catch (error) {
    console.log("\nInvalid input. Please, type a text.\n");
    table();
  }
})()