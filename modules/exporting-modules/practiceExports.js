function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

function evenOrOdd(num){
    if (num%2===0){
        return "Even";
    } else {
        return "Odd";
    }
}

function randomArrayElement(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

//import one function 
//module.exports = isPalindrome;

//export multiple function 
 module.exports = {
    isPalindrome : isPalindrome,
    evenOrOdd: evenOrOdd,
    randomArrayElement: randomArrayElement

 }