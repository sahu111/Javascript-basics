function myName(){
    console.log("P");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("A");
    console.log("J");
}

// myName   //function ka reference ha

// myName()     // function ka execution

// -------------------------------------------------------

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(2,3)

// -------------------------------------------------------
// function me parameter dena

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// -------------------------------------------------------
// function me default parameter dena
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Pankaj"))
console.log(loginUserMessage("Pankaj"))

// -------------------------------------------------------
//REST OPERATOR / SPREAD OPERATOR [...]    return krega array
function calculateCartPrice(...num1){
        return num1
}

console.log(calculateCartPrice(200,300,400));

// ---------------------------------------------------------
// function me object param pass krna
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


// ---------------------------------------------------------
// function me array param pass krna

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));