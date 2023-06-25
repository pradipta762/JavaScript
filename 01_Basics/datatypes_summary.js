// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 2534253876526451544765n



// Reference (Non primitive)   Return type :- object

// Array, Objects, Functions 

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "pradipta",
    age : 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);