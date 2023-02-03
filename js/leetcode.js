//  It wants us to get two numbers from the array that add up to the target. EX:
//  nums = [1, 5, 9]
// target = 10
// answer would be [0, 2]
// i =0
// j = 1

var twoSum = function(nums, target) {
    for(let i = 0; i <nums.length; i++){
        for(let j = i + 1; j< nums.length; j++){
            // We are doing j = i + 1 because you dont want j to start the same as i
            if(nums[i] + nums[j] === target){
                return [i, j];
            }

        }
    }
};


// Is Palindrome

function isPalindrome(x) {
    // This is how you get a string and reverse it
    // .split is so it splits the string and then reverse the string and then join
    let reversed = x.toString().split('').reverse().join('');
    return x.toString() === reversed;
}



// Longest Common Prefix
let strs = ['flower', 'flow', 'flight']
let strs2 = ["Hello", "Helicopter", "Helli"]


function longestCommonPrefix(strs) {
    // We are checking if there is nothing then don't return anything
    if (strs.length == 0){
        return ''
    }
    // We are checking for the first string in the array
    let prefix = strs[0];
    // We need to loop through the array
    for (let i = 0; i < strs.length; i++){
        // We are doing a while loop to check for the same prefix
        // So it is checking if it's not an empty string the keep going
       while (strs[i].indexOf(prefix) != 0){
           prefix = prefix.substring(0, prefix.length - 1)
           console.log('prefix is currently  ' + prefix)
       }
    }
    return prefix
};




// Valid Parentheses

let isValid = function(s) {
    // We are listing the brackets in hashmap
    const hashMap = { "(" : ")", "{": "}", "[": "]"}
    // stack is a empty array
    const stack = [];

    // ES6 For loop
    // ch is characters
    for(let ch of s){
        // checking if it contains a hashmap
        if(hashMap[ch]){
            // ch is an opening bracket
            // if it has one then push to empty array which is stack
            // if it has a bracket then push
            stack.push(hashMap[ch])
            // this is checking if its has a closing bracket at the end
        } else if (stack.length > 0  && stack[stack.length - 1] === ch) {
            // ch is a closing bracket and top of stack matches
            stack.pop()
        } else {
            // ch is a closing bracket and top of the stack doesnt match
            return false
        }
    }

    return stack.length === 0
};

