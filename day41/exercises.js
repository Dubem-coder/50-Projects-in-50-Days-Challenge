const candidates = [
    {
    id: 1,
    name: "Jennifer",
    course: "Software Engineering"
    }, 
    {
        id: 2,
        name: "Micheal",
        course: "Software Engineering"
    },
    {
        id: 3,
        name: "Mercy",
        course: "Cybersecurity"
    },
    {
        id: 4,
        name: "Dubem",
        course: "Data Analysis"
    }
];
for (const candidate of candidates){
    console.log(candidate.name, candidate.course);
}
console.log(candidates[1].course);

const candidate = candidates.find(s => s.id === 4);
console.log(candidate)

const softwareStudents = candidates.filter(
    candidate => candidate.course === "Software Engineering"
);
console.table(softwareStudents);

//extracting properties values of Objects in an Array...
const names = candidates.map(candidate => candidate.name);
console.table(names)

//looping through Object properties
const persons = {
    name: "David",
    age: 18,
    course: "Python",
    skills: {
        indoor: "Table Tennis",
        outdoor: "Racing"
    }
};

for (const key in persons) {
    if (Object.hasOwn(persons, key)) {
        console.log(key, persons[key]);
    }
}
persons.level = "Intermediate";
//Objects.keys
console.log(Object.keys(persons));

console.table(Object.values(persons));

//object.entries

for (const [key, value] of Object.entries(persons)) {
    console.log(`${key}: ${value}`)
}

//Destucturing and spread syntax................
//Object Destucturing
const people = {
    name: "Jennifer",
    age: 19,
    sex: "Female",
}
