# utility-soup

## Functions

### Counter Functions

- `increment()`: Increments the counter by 1 and returns the updated value.
- `decrement()`: Decrements the counter by 1 and returns the updated value.

### String Utilities

- `toUpperCase(text)`: Converts the input string `text` to uppercase.

### Date and Time Tools

- `formatDate(date)`: Formats the input `date` object into a readable string.

### Array Manipulators

- `sortArray(arr)`: Sorts an array of integers in ascending order.

## Example Usage

```javascript
import { increment, decrement, toUpperCase, formatDate, sortArray } = from 'my-utility-package';

console.log(increment()); // 1
console.log(decrement()); // 0
console.log(toUpperCase('Hello, world!')); // 'HELLO, WORLD!'
console.log(formatDate(new Date())); // e.g., 'April 1, 2024, 10:00 AM'
console.log(sortArray([3, 1, 4, 1, 5, 9])); // [1, 1, 3, 4, 5, 9]
```
