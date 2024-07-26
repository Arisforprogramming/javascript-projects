const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isValidLetterA = function(a) {

  // ensure input start with 'a'
  if (a[0]==="A".toLocaleLowerCase()) {
  return true;
  }

  return `false\n`;
};

console.log(getValidInput('\nPlease add word Input:', isValidLetterA));


// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
