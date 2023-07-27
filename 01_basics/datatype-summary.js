//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null // null ka datatype object hai
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions   : Array,Object ka datatype object aur Function ka function object

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "pankaj",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3