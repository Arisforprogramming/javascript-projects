let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays?  NO Verify this by printing holdCabinet1 after using the method.
let newArr = [];
newArr= holdCabinet1.concat(holdCabinet2);
console.log(newArr);
//Verify this by printing holdCabinet1
console.log(holdCabinet1)

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(" Print a slice of two elements from each array. Does slice alter the original arrays? \n")
console.log("\n Slice from index2 \n")
console.log(holdCabinet1.slice(2));
console.log(holdCabinet1.slice(1,3));
console.log(holdCabinet1);
console.log(holdCabinet2.slice(2))
console.log(holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

console.log("reverse the first \n");
console.log(holdCabinet1.reverse());
console.log("sort the second \n");
console.log(holdCabinet2.sort());
console.log("Do the methods alter the original arrays? \n");
console.log(holdCabinet1);
console.log(holdCabinet2);