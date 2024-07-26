// Define your Book class here:
class Book {
    constructor(title,author,copyrightDate,isbn,numberOfPages,numberOfTimes,theBookCheckedOut,discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = new Date(copyrightDate);
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.numberOfTimes = numberOfTimes;
        this.theBookCheckedOut = theBookCheckedOut;
        this.discarded = false;
    }
      checkOut(uses =1) {
        this.theBookCheckedOut += uses;
        console.log(`${this.title} has been checked out ${this.theBookCheckedOut} times`)
        
    }
}
// Define your Manual and Novel classes here:
// Declare the objects for exercises 2 and 3 here:

class Manual extends Book {
    constructor(title,author,copyrightDate,isbn,numberOfPages,numberOfTimes,theBookCheckedOut,discarded){
        super(title,author,copyrightDate,isbn,numberOfPages,numberOfTimes,theBookCheckedOut,discarded)
    }
  dispose(currentYear){
     if(currentYear-this.copyrightDate > 5){
         this.discarded = "Yes" ;
     }
  }
}

class Novel extends Book {
    constructor(title,author,copyrightDate,isbn,numberOfPages,numberOfTimes,theBookCheckedOut,discarded){
        super(title,author,copyrightDate,isbn,numberOfPages,numberOfTimes,theBookCheckedOut,discarded)
    }
   dispose(){
    if(this.numberOfTimes >100) {
        this.discarded = "Yes";
    }
   }
}

console.log("add work");





// Declare the objects for exercises 2 and 3 here:
let organize1 =  new Manual ('Top Secret Shuttle Building Manual','Redacted',2013,"0000000000000",1147,1,"NO")
console.log(organize1);

let organize2 =  new Novel ("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32);
console.log(organize1);
console.log("test")
// Code exercises 4 & 5 here:
