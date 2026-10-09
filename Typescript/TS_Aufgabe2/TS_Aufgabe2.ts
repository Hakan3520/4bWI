interface Student {
    name: string;
    age: number;
    grade: number;
}

const students: Student[] = [
    { name: "Max", age: 17, grade: 2 },
    { name: "Anna", age: 18, grade: 1 },
    { name: "Lukas", age: 16, grade: 4 },
    { name: "Sarah", age: 17, grade: 3 },
    { name: "David", age: 18, grade: 2 }
];


// MAP: Alle Namen ausgeben
const names = students.map(student => student.name);

console.log("Map:");
console.log(names);


// FILTER: Schüler mit einer Note besser als 3
const goodStudents = students.filter(student => student.grade <= 3);

console.log("Filter:");
console.log(goodStudents);


// SORT: Schüler nach Note sortieren
const sortedStudents = students.sort((a, b) => a.grade - b.grade);

console.log("Sort:");
console.log(sortedStudents);