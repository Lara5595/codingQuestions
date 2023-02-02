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

function isValid(s) {
    if (s.contains("()") && s.contains("{}") && s.contains("[]")){
        return true
    }
}

