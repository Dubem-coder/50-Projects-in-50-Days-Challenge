//Structure of lesson
// for loop --- Repeat instructions a known number of times
//while loop --- repeats an instuction while a condition remains true
//do...while --- Executes instuctions atleast once...
//break and continue --- Controlling loop execution...
//Loops inside functions --- build reusable systems
//********************************************************/
//for loop
function countNumber() {
    for (let i = 1;
        i <= 100;
        i++

    ) {
        console.log(i)
    }
}
countNumber();

//while Loop:
function countDown(number) {
    while (number > 0) {
        console.log(number);
        number--;
    }

    console.log("Countdown Complete!")
}
countDown(99);

//Combining Functions / Conditions and Loops
function checkStudentScores(score) {
    for (let i = 0; i < score.length; i++) {
        if (score[i] >= 70){
            console.log("Excellent");
        }else if (score[i] >= 50) {
            console.log("pass");
        } else {
             console.log("Fail")
        }
    }
}

checkStudentScores([87, 98, 67, 48, 65]);

// loops are programming structures that executes a block of code repeatedly while a condition
// is satisfied

for (let i = 1; i<= 5; i++) {
    console.log("Welcome to Jenga Tech")
}

for (let i = 3; i <= 7; i++) {
    console.log(i);
}
for (let i = 10; i >= 5; i--){
    console.log(i)
}

for (let i = 2; i <= 20; i += 2){
    console.log(i);
}
//THE WHILE EXPLAINED>>>>>
let number = 1;

while (number <= 5) {
    console.log(number);
    number++
}
//timer
function countdown(seconds) {
    while (seconds > 0) {
        console.log(seconds);
        seconds--;
    }
    console.log("Time is up!!!!")
}
countdown(10);