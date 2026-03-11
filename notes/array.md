# Array Notes

## Array Validation Techniques
- Check if input is an array: `Array.isArray(arr)`
- Validate array elements: `typeof element !== 'number'`
- Check for finite numbers: `Number.isFinite(num)`
- Handle edge cases: empty arrays, non-array inputs, invalid elements

## Common Patterns
- Iterating through arrays: `for...of` loop
- Counting elements that meet a condition
- Early return for invalid inputs
- Type checking and validation before processing

## Input Validation
- Always validate input type first
- Check each element's type and validity
- Return appropriate error values (false) for invalid inputs
- Handle special number cases: NaN, Infinity, -Infinity

## Two-Pointer (In-Place)
- One pointer tracks "write" position for unique/valid elements (e.g. `x`).
- Other pointer scans the array (e.g. loop index `i`).
- When a new unique value is found (`nums[i] > nums[x]`), increment write index and copy value.
- Used when modifying array in-place with O(1) extra space.

## Two-Pointer (Reversal)
- Swap elements from both ends toward center: loop to half length, swap `s[i]` with `s[len - i - 1]`.
- Used for in-place array reversal (e.g. Reverse String — input is array of characters).

## Two-Pointer (Merge from End)
- When merging into one array in-place, fill from the end to avoid overwriting unread values.
- Pointers at last valid index of each array; place the larger element at current end, then decrement.
- Handles one array exhausted first: if nums2 exhausted, break; if nums1 exhausted, copy rest of nums2.

## XOR (Single Unique in Pairs)
- When every element appears twice except one: XOR all elements; pairs cancel (a ^ a = 0), so result is the unique number (a ^ 0 = a).
- O(n) time, O(1) space (e.g. Single Number, LeetCode #136).

## Sum Formula (0 to n)
- Expected sum of 0, 1, …, n is `n * (n + 1) / 2`.
- Sum the array; missing number = expected sum − array sum.
- O(n) time, O(1) space (e.g. Missing Number).

## Recursion (Index-Based)
- Sum from index 0 to n: base case `n === 0` return `arr[0]`; recursive case `arr[n] + sum(arr, n - 1)`.
- Full array sum: call with `n = arr.length - 1`; handle empty array separately (return 0).
- Time O(n), space O(n) due to call stack.

## Recursion (Conditional Sum, e.g. Odd Only)
- Same index-based recursion; only add element when it meets a condition (e.g. odd: `arr[n] % 2 !== 0`).
- Base case: `n === 0` return `arr[0]` if condition holds, else `0`.
- Recursive case: `(condition ? arr[n] : 0) + sumConditional(arr, n - 1)`.
- Handle `n < 0` for empty array (return 0).

## Single Pass / Streak Counting
- Track current streak (e.g. `currentCount`) and max streak (e.g. `maxCount`).
- On streak continuation (e.g. `nums[i] === 1`), increment current; on break (e.g. `nums[i] === 0`), update max and reset current.
- After loop, take max of `maxCount` and `currentCount` so a trailing streak is considered (e.g. Max Consecutive Ones).

## Used in Problems
- Count Negative
- Second Largest Element
- Remove Duplicates from Sorted Array (LeetCode #26)
- Remove Element (LeetCode #27)
- Reverse String (LeetCode #344)
- Best Time to Buy and Sell Stock (LeetCode #121)
- Merge Sorted Array (LeetCode #88)
- Move Zeroes (LeetCode #283)
- Max Consecutive Ones (LeetCode #485)
- Missing Number (LeetCode #268)
- Single Number (LeetCode #136)
- Sum of All Numbers in Array (Recursion)
- Sum of Odd Numbers in Array (Recursion)
- Linear Search
