function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
//  let select =  Math.floor(Math.random()*arr.length);
//     return arr(select);
let index = Math.floor(Math.random()*arr.length);
return arr[index];

}

//console.log(randomFromArray(["mama","Water","soysauce"]))

//TODO: Export the randomFromArray function.

module.exports =  randomFromArray;