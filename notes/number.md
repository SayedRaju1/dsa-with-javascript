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
- Check overflow BEFORE updating result, not after
- Use `(x / 10) | 0` to truncate toward zero (handles negative numbers correctly)

## Used in Problems
- Palindrome Number
- Reverse Integer
