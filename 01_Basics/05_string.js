const name = "Pradipta"
const repoCount = 50

// console.log(name + repoCount + " Value");

// String intercoliation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pradipta-pd')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10, 4)
console.log(anotherString);

const newStringOne = "      pradipta      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pradipta.com/pradipta%20dash"

console.log(url.replace('%20', '-'))