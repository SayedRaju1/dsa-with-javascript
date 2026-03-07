# Recursion Notes

## What is Recursion
- A function **calls itself** to solve a problem by **breaking** it into smaller sub-problems.
- Same operation applied to a smaller input until a base case is reached.

## Base Condition
- **Essential**: Stops the recursion when a condition is met.
- Without it, recursion runs infinitely and causes **stack overflow**.
- Each recursive call is stored in the **call stack**; too many calls exhaust memory.
- Example: `if (num === 0) return;`

## Call Stack
- Every function call (including recursive ones) uses space on the call stack.
- Deep recursion → many stack frames → O(n) auxiliary space for n calls.

## Used in Problems
- Print Numbers from n to 1 (Recursion 101)
- Sum of First n Numbers (base case: n === 0 return 0; recursive case: n + sum(n - 1))
- Is Power of Two (base case: n === 1 → true; invalid: n < 1 or n % 2 !== 0 → false; recursive: isPowerOfTwo(n / 2))
