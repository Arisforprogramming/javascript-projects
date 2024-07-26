function removeI(arr) {
    if (arr.indexOf('i') !== -1){  // test the base case here in this line 
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));

console.log("\nCOMBINE ENTRIES")

arr = ['L', 'C', '1', '0', '1'];

function combineEntries(arrayName){
  if (arrayName.length <= 1){
      return arrayName[0];
  } else {
      return arrayName[0]+combineEntries(arrayName.slice(1));
  }
}
console.log(combineEntries(arr));

console.log("\nCheck Your Understanding\n");

function decreasingSum(integer) {
  if (integer === 1){
  return integer;
  } else {
  //call decreasingSum function again
  return integer + (decreasingSum(integer-1));
  }
}

console.log(decreasingSum(5));
