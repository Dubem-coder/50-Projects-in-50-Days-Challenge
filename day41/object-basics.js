let name = "Jennifer";
let age = 19;
let course = "software enginnering";
let email = "jennifer-example@gmail.com";

const student = {
    name: "Jennifer",
    age : 19,
    course : "Software Engineering",
    email : "Jennifer-example@gmail.com"
};
//Dot Notation
console.log(student.name);
console.log(student.course);

//bracket notation
console.log(student["name"]);

const laptop ={
    brand : "HP",
    "model name": "elitebook 840 g7"
}

console.log(laptop.brand)

console.log(laptop["model name"])

const system = {
    brand : "HP",
    "model name": "probook 840 g7",
    processor : "core i7",
    ram : "16gb",
    storage : "2TB",
    price: "230000"
};

//update Object Properties
system.price = "200000";

//Delete Properties

console.log(system.ram)

// checking if a property exists
console.log("name" in system);

//Create an employee Object, Addnandept property, increase salary by 15%,
//verify whether dept exist delete temporary property

const employee = {
    name: "Micheal",
    age:28,
    position:"Sodtware developer",
    salary: 150000,
    temporary: "intern"
}
// Add dept
employee.department = "IT";

// Increase salary by 15%
employee.salary = employee.salary * 1.15;
//verify if dept exists

console.log(Object.hasOwn(employee, "department"));

const studentz = {
    name: "Jennifer",
    course: "Software Engineering",

    introduce : function (){
        return `My name is ${this.name}`;

    }
};

console.log(studentz.introduce());
//.....deposit / withdrawl logic

const account = {
    owner : "Micheal",
    balance: 50000,

    deposit(amount){
        if(!Number.isFinite(amount) || amount <= 0){
            return "Invalid Amount";
        }

        this.balance += amount;

        return this.balance;
    }
}