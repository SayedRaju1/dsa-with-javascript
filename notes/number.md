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

## Overflow Prevention
- 32-bit signed integer range: [-2³¹, 2³¹ - 1] = [-2147483648, 2147483647]
- Check overflow before returning: for positive rev ≤ 2³¹−1; for negative (return −rev) need rev ≤ 2³¹
- Reverse Integer: preserve sign (xCopy), work with Math.abs(x), build rev, then check overflow and restore sign

## Used in Problems
- Palindrome Number
- Reverse Integer
- Count Digits (digit count via division by 10)
