/**
 * LeetCode #1796 - Second Largest Digit in a String
 *
 * Topic: String
 * Difficulty: Easy
 *
 * Approach:
 * - Extract all digits from the string
 * - Use a Set to store unique digits
 * - Sort digits in descending order
 * - Return the second largest digit, or -1 if it doesn't exist
 *
 * Time Complexity: O(n), where n is the length of the string.
 * Space Complexity: O(1), because the set and array store at most 10 digits.
 */

const secondHighest = function(s) {
    const onlyNums = new Set()

    for (char of s){
        if (char >= '0' && char <= '9'){
            onlyNums.add(Number(char))
        }
    }

    const numsSortedArray = [...onlyNums].sort((a,b)=> b-a);

    if (numsSortedArray.length <=1){
        return -1
    }
    else{
        return numsSortedArray[1]
    }
};
