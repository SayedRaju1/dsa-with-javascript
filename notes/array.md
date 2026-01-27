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

## Used in Problems
- Count Negative
