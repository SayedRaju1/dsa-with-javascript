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

## Used in Problems
- Count Negative
- Second Largest Element
- Remove Duplicates from Sorted Array (LeetCode #26)
- Remove Element (LeetCode #27)
- Reverse String (LeetCode #344)
- Best Time to Buy and Sell Stock (LeetCode #121)
