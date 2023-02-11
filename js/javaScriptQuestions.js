// This checks if the numbers are even or odd
function evenOrOdd(number) {
    if(number %2 === 0){
        return("Even")
    } else if (number %2 !== 0){
        return("Odd")
    }
}

// Pushing numbers into a array
function pushNumbersToArray(num){
    let arr = []

    for (let i = 0; i <=num; i++){
        arr.push(num)
    }
    return arr;
}

console.log(pushNumbersToArray(30))


// Pushing a string and length into a empty array
function addLength(str) {
//start-here

    let words = str.split(' ');

    let arr = [];

    for(let i = 0; i < words.length; i++){
        arr.push(words[i] + ' ' + words[i].length);
    }

    return arr;
}

console.log(addLength("helloooooo"))


<<<<<<< HEAD:javaScriptQuestions.js
// need to add new problems
=======


// fizzbuzz
function fizzBuzz(n) {
    // Write your code here
    for(let i = 1; i <=n; i++){
        if(i % 3 === 0 && i %5 === 0){
            console.log("fizzbuzz")
        } else if( i % 3 === 0){
            console.log("fizz")
        } else if( i % 5 === 0){
            console.log("buzz")
        } else {
            console.log(i)
        }
    }

}
>>>>>>> 5bdb3892a08cd68cb0b9b910f5611d1751f4619a:js/javaScriptQuestions.js
