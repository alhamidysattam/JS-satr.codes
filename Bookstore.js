// Bookstore => JS Projects 101

let Bookstore = [

       ['1' , "Start with why" , "Simon Sinek" , 80.0, 13],
       ['2' , "But how do it know" ,"J. Clark Scott" ,59.9 , 22],
       ['3' , "Clean Code" , "Robert Cecil Martin" , 50.0 , 5],
       ['4' , "Zero to One" , "Peter Thiel" , 45.0 , 12],
       ['5' , "You don't know JS" , "Kyle Simpson" , 39.9 , 9]
];


let salary = 530; 


// Show book information by Book Id , Title , Author
function bookDetails(input){
       for(let i = 0 ; i < Bookstore.length ; i++){
              for(let j = 0 ; j < Bookstore.length - 2 ; j++ ){
                     if(Bookstore[i][j] === input){
                            console.log(Bookstore[i])
                     }
              }
       }
}
// Buying a book: checking the customer’s salary, the quantity of the book in the store, and if the name of the book is already there.
function buyBook(Title , salary , qty ){
       let price = 0;
       for(let i = 0 ; i < Bookstore.length ; i++){
              if(Bookstore[i][1] == Title ){
                     console.log("Book is available: " + Bookstore[i][1]);
                     price = qty * Bookstore[i][3];
                     if(price < salary){
                            if(Bookstore[i][4] >= qty){
                                          console.log("quantity of the book : " + Title + " is "+  Bookstore[i][4]);
                                          Bookstore[i][4] = Bookstore[i][4] - qty;
                            }else{console.log("Quantity is not available"); return;}
                            }else{console.log("There is not enough balance"); return;}
       
       }else{console.log(`Book : "${Title}" is not available`); return;}
       
}
console.log("Thanks, your book is "+ Title + " and the price is "+price);
}


buyBook("You don't  JS", salary , 8);
bookDetails("You don't know JS");
buyBook("You don't know JS", salary , 3);
bookDetails("You don't know JS");
