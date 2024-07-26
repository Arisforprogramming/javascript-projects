function hello(name) {
   if (name === undefined)
       name = "World";

   return "Hello, " + name +"!";   //"!" remove this the test
}

module.exports = hello;