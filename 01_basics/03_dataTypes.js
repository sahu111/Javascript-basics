"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Pankaj")


let name = "Pankaj"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

/*
    Number: Represents numeric values, including integers and floating-point numbers. Examples: 42, 3.14, -10.
    String: Represents a sequence of characters. Examples: "Hello", 'JavaScript', "123".
    Boolean: Represents a logical value, either true or false.
    Null: Represents an intentional absence of any value. It is its own type and has only one value: null.
    Undefined: Represents a variable that has been declared but not assigned a value. Variables that are not initialized have the value of undefined.
    Symbol: Introduced in ECMAScript 6, it represents a unique and immutable value that can be used as an identifier for object properties.
    Object: Represents a collection of key-value pairs. Objects can store various data types as properties. 
            Examples:
                    const person = {
                                        name: "John",
                                        age: 30,
                                        isStudent: true,
                                    };
    
    Array: Represents an ordered collection of elements, accessible by numeric index. Arrays can hold multiple data types. 
    Examples:
                const numbers = [1, 2, 3, 4, 5];
                const fruits = ["apple", "banana", "orange"];                                
*/