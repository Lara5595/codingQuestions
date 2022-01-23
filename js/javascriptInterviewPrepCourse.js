// Log hello world

console.log("helloworld")




// 1. Write code to get an array of names from given array of users

const users = [
    {
        id: 1,
        name: "David",
        isActive: true,
        age: 27,
    },

    {
        id: 2,
        name: "Lessly",
        isActive: true,
        age: 24,
    },
    {
        id: 3,
        name: "Luca",
        isActive: false,
        age: 0,
    }
];


// Using a for loop
// let names = [];
// for (let i = 0; i < users.length; i++){
//     names.push(users[i].name);
// }
// console.log(names)

// Using forEach
// const names = [];
// users.forEach((user) =>{
//     names.push(user.name)
// })

// Using map
// const names = users.map((user) => user.name);
// console.log(names)

// 2. Get back only active users

// let activeUsers = [];
// for (let i = 0; i < users.length; i++){
//     if (users[i].isActive) {
//         activeUsers.push(users[i].name)
//     }
// }
//
// console.log(activeUsers)

// Using filter and map

// const names = users.filter((user) => user.isActive).map((user) => user.name);
// console.log(names)






// Hoisting
// What will be logged in the first example and in second example?

let var1;
console.log(var1) // undefined because it is not being defined at all
console.log(typeof  var1); // undefined

let var2 = null; // null
console.log(var2); // null because we passed it a var null
console.log(typeof var2) // object


// difference between null or undefined
// : Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript. Undefined: It means the value does not exist in the compiler



// What will be console.logged here
// Question 1
// console.log(foo); // this is called hoisting because it is not declared yet and we get a error foo is not defined
// foo = 1;

// Question 2
console.log(foo); // We get undefined because it is hoisting
var foo = 2;

// question 3
foo = 3;
console.log(foo); // this console log  3
var foo;







// closures

// create a counter function which has increment and getValue functionality

// function countTo100(){
//     for(let i = 0; i <=100; i++){
//         console.log(i)
//     }
// }
//
// countTo100()

// this is with a variable
function countTo100(num){
    for(let i = 0; i <=num; i++){
        console.log(i)
    }
}

countTo100(20)
