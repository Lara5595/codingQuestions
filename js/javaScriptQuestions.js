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

