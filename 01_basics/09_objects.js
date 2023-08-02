// singleton
Object.create // constructor method k throug

// object literals
const obj = {} // empty object

const mySymbol = Symbol("key1") // Symbol Declaration

const JsUser = {
    name:"Pankaj",
    "full Name" : "Pankaj Kumar",
    age:25,
    location: "Raipur",
    isLoggedin:false,
    lastLoginDays:["Monday","Friday"],
    [mySymbol]:"myKey1",        //agr symbol ki trh use krna hai to [] lgana hoga else key string datatype btaega
    mySymbol:"myKey2"           
}

console.log(JsUser)
//// Dono method se access kr skte hai
// console.log(JsUser.name);
// console.log(JsUser["name"]);

//// BUT in this case is method se access NHI kr skte hai
// console.log(JsUser.full Name);     //ERROR
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySymbol],typeof JsUser[mySymbol])       // Symbol access aise krna h


// JsUser.name = "Sahu"    //value overwrite kr diye mtlb object me value name: "Sahu" 
// Object.freeze(JsUser)   // Object freeze kr diye, ab is JsUser object me koi change ni ho paega but error bhi nhi aega
// JsUser.name = "Kumar"   //freeze example
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
    return "yes"
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());  
console.log(JsUser.greetingTwo()); // o\p undefined isliye aa raha tha kyuki function kuch return nhi kr raha
// console.log(JsUser)