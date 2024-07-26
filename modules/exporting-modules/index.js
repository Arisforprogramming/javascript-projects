// Import the modules exported from practiceExports.js below:
const practice= require('./practiceExports');

/*console.log(typeof palindromeCheck);
console.log(palindromeCheck("banana"));
console.log(palindromeCheck("tacocat"));*/

console.log(typeof practice);
console.log(practice);

console.log(practice.evenOrOdd(5));

let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));

for (i=0; i < 3; i++){
    console.log(practice.randomArrayElement(arr));
}