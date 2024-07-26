// Here we assign the method inside the constructor
class AstronautI {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.reportStats = function() {
       let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
         return stats;
     }
   }
 }
 
 // Here we assign the method outside of the constructor
 class AstronautO {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
 
   reportStats() {
     let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
     return stats;
   }
 }
 
 let fox = new AstronautI('Fox', 7, 12);
 let hippo = new AstronautO('Hippo', 25, 1000);

 console.log(fox);
 console.log(hippo);
 console.log(`\nremoved the" () "\n`);
 console.log(`call medthod inside${fox}`);
 console.log(`call medthod outside ${hippo}`);
 console.log(`\nadded JSON.stringify()\n`);
 console.log(`call medthod inside${JSON.stringify(fox)}`);
 console.log(`call medthod outside ${JSON.stringify(hippo)}`);