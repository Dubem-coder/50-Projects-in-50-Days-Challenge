//setting up your first dom project
const heading = document.querySelector("h1");

console.log(heading);
console.log(document.title);
console.log(document.URL)
console.log(document.body)
console.log(document.documentElement)

//Change title
document.title = "Jenga TEch DOM class";
//twitch the styling

document.body.style.backgroundColor = "grey";

const head = document.getElementById("heading");
console.log(head);

const students = document.getElementsByClassName("student");
console.log(students);
console.log(students[0]);

//Loops
for (let student of students) {
    console.log(student.textContent);
}
//Get element by tagName

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

//queryselector for each
paragraphs.forEach((paragraphs) => {
    console.log(paragraphs.textContent)
});

//Comparison of selection methods
//getElementById(), getElementByClassName, getElementByTagName,