const heading = document.querySelector("#heading");
heading.style.color = "red";
heading.style.border= "2px solid black";
heading.style.padding = "20px";
heading.style.fontSize = "40px";
heading.style.backgroundColor = "green";

const box = document.querySelector("#box");

box.classList.add("active");


console.log(box.classList.contains("hidden"));
