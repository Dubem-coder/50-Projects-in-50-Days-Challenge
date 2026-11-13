// understanding how proffessionals stucture 
// programs using advanced functions
//project:banking application

//Remember: A function is a renewable block of code
let price1 = 5000;
let quantity1 = 3;

let total = price1 * quantity1;

console.log(total);
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(5000, 6))
console.log(calculateTotal(4000, 3))

console.log(calculateTotal(8000, 7))
console.log(calculateTotal(2000, 6))
console.log(calculateTotal(4000, 9))
console.log(calculateTotal(5000, 2))
console.log(calculateTotal(1000, 6))
console.log(calculateTotal(52000, 1))

//Function Declaration

function greet() {
    console.log("Welcome to jenga");
}

greet();

//Function Expression
const greets = function(){
    console.log("Welcome!");
}
greets();

//Arrorw Functions

const greet1 = () => {
    console.log("Hello Students");
};

greet1()

const add = (a, b) => {
    return a + b;
};

console.log(add(12, 23));
const add1 = (a, b) => a + b ;
console.log(add1(12, 23))