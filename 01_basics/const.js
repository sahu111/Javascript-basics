/*
EXAMPLE 1 
*/

// Declaring a constant variable
const pi = 3.14159;

// Attempting to reassign a value to the constant variable (this will result in an error)
// Uncomment the line below to see the error message
// pi = 3.14; // This will throw an error

// Using const with objects
const person = {
  name: "Pankaj",
  age: 25,
};

console.log(person); // Output: { name: 'Pankaj', age: 25 }
// Although the variable is constant, the properties of the object can still be modified
person.age = 26;

console.log(pi); // Output: 3.14159
console.log(person); // Output: { name: 'Pankaj', age: 26 }

/*
EXAMPLE 2 
*/
const z = 10;
if (true) {
  const z = 20;
  console.log(z); // Output: 20
}
console.log(z); // Output: 10

// Constants can be shadowed in inner scopes, 
// meaning a new variable with the same name can be declared 
// within a block scope without affecting the outer variable.