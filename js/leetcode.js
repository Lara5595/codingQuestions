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