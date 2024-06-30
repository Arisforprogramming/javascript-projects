const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) 
    console.log(newStr)
    console.log(`The original string is LaunchCode and cut it out uising slice from 0,3 
  so this is how it print ${str.slice(0,3)}\n`);

    console.log(`then added it back together like this`)
    console.log(`${newStr+ str.slice(0,3)}\n`);

    console.log(`let's see if it can be done in 1 line`)
    let modifiedStr = str.slice(3) + str.slice(0, 3);
    console.log(`here how it print : ${modifiedStr}\n`);
    
  

    
   



//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The string '${str}' has been converted to '${newStr+ str.slice(0,3)}\n`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
 let userInput = input.question("Please enter the number of letters that will be relocated: ");
   console.log(Number(userInput));

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
   
let tooLong = false;

if(isNaN(userInput) || userInput > str.length || userInput <= 0) {
        userInput = 3;
       toolong = true;
   };

   let userInputStr = (str.slice(userInput) + str.slice(0, userInput));

   

   if(tooLong){
    userInputStr += ('the number provided was bigger than the length of word, only 3 is maximum');

   }

   console.log(userInputStr)


