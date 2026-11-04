function factorial(n) {
if (n < 0 || !Number.isInteger(n)){
    throw new Error("Enter a non-negative integer");
}

if (n === 0 || n === 1){
    return 1;
}

return n * factorial(n-1);
}
console.log(factorial(6))

/////////////////////////////////////////////////////////////////////////////////////
//A closure allows functions to retain variables from the surrounding scope
//this happens even after the outer function is returned



function createCounter(){
let count = 0;
return function(){
       count++;
       return count;
};
}
const counter = createCounter();
console.log(counter());

//student result management system
function calculateAverage(scores){
    if (scores.lenght === 0) {
        return 0;
    }

    let total = 0;

    for (let score of scores) {
        total += score;
    }
    return total / scores.lenght;
}

// Determine Student Grade.
function getGrade(score) {
    if(score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 40) return "D";

    return "F"
}
//Determine Pass or Fail
function checkStatus(average) {
    return average >= 5 ? "Pass" : "Fail" ;
}

//Generate report

function generateReport(name, scores){
const average = calculateAverage(scores);
const grade = getGrade(average);
const status = checkStatus(average);
   

    console.log("Student Report System");
    console.log("______________________________")
    console.log("Name: ", name);
    console.log("Scores: ",scores);
    console.log("Average: ", average.toFixed(2));
    console.log("Grade: ", grade);
    console.log("Status: ", status);
}

generateReport("Micheal Igwebuike", [78, 87, 94, 68, 88]);