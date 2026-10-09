const numbers: number[] = [5, 2, 8, 1, 9];


// MAP

const doubledNumbers = numbers.map(number => number * 2);

console.log("Map:");
console.log(doubledNumbers);


// FILTER

const filteredNumbers = numbers.filter(number => number > 5);

console.log("Filter:");
console.log(filteredNumbers);


// SORT

const sortedNumbers = numbers.sort((a, b) => a - b);

console.log("Sort:");
console.log(sortedNumbers);