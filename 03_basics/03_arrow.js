const user = {
    username:'Pankaj',
    price:1000,
    welcomeMSG:function(){
        console.log(`${this.username}, Welcome to website`);
    }
}
// user.welcomeMSG()
user.username = 'Sahu'
// user.welcomeMSG()
// console.log(user);

// console.log(this);
//------------------------------------
// function ke andr this kaam nhi krta, Object ke context me krta hai
function chai(){
    let username = 'pankaj'
    console.log(this.username);
}

chai()   //o/p undefined

//-------------------------------------
// Function declaration using arrow function
// {} me return likhna pdega; () me nhi likhna pdega bcz implicit return
//Ex:
const a = () => {return}
const arrowFn = () => ({user:'Pankaj'}) // arrow function me object return

// m1
const addTwo = (num1,num2) => {
    return num1+num2
}
// m2
const addTwo1 = (num1,num2) => num1+num2
// m3
const addTwo2 = (num1,num2) => (num1+num2)

console.log(addTwo(4,6));