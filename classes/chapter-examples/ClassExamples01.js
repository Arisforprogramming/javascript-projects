//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';
fox.color =  'yellow';


console.log(fox);
console.log(fox.age, fox.color);

// //Try modifying or adding properties below.
fox.food = "broccoli"
console.log(fox);

let hippo = new Astronaut("Hippo",52,4114);
console.log(hippo);

hippo.food = "anchovey";
console.log(hippo.food);
console.log(hippo);
console.log("\n*call same time*\n")
console.log(hippo,fox);
