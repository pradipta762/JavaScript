// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true

// The reason that the line 13 gives true because An equality chek == and comparisons < > >= <= works differently.
//Comparison convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);