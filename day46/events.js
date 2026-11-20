//Events are actions occuring in the browser
//.addEventListner
const button = document.querySelector("#clickButton");

button.addEventListener("click", function(){
    alert("Button was clicked nigga")
});

const addArrow = (a, b) => {
    return a + b
};

console.log(addArrow(2, 3));


const addShort = (a, b) => a + b;

const square = x => x * x;
const cube = x => x * x;


const greet = (name) => `Hello, ${name}`;
const makeUser = (user, age) => ({
    name: user, age: age
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

const timer = {
    seconds : 0, start() {
        setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
            
        }, 1000)
    }
};

timer.start();




console.log(doubled);
console.log(evens);
console.log(makeUser("Jennifer", 19))
console.log(greet("Dubem"));
console.log(addShort(3, 5))
console.log(cube(3));
