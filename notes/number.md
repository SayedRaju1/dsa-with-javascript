# Number Notes

## Number Manipulation Techniques
- Reversing numbers without converting to string
- Extracting digits using modulo and division
- Handling edge cases (negative numbers, trailing zeros)
- Avoiding integer overflow by processing only half the number

## Common Patterns
- Reversing a number: `reversed = reversed * 10 + (num % 10)`
- Extracting digits: `num % 10` for last digit, `Math.floor(num / 10)` to remove last digit
- Checking palindromes without string conversion

## Used in Problems
- Palindrome Number
