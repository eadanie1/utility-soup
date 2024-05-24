# Utility Soup

Utility Soup is a collection of practical utility functions designed to simplify common tasks in JavaScript and TypeScript development. Whether you're working on a React project, a Node.js application, or any other JavaScript-based project, Utility Soup provides a set of versatile tools to enhance your development experience.

## Functions

### Counter Functions

- `increment()`: Increments the counter by 1 and returns the updated value.
- `decrement()`: Decrements the counter by 1 and returns the updated value.

### String Utilities

- `upperCaseify(text)`: Converts the input string `text` to uppercase.

### Date and Time Tools

- `dateToText(string)`: Formats the current date into a readable string (i.e. Feb 5, 2024, 10:00 PM).

### Array Manipulators

- `sortArray(array)`: Sorts an array of integers in ascending order.

## Installation

You can install Utility Soup via npm:

```bash
npm install utility-soup
```

## Usage

```javascript
import {
  increment,
  decrement,
  toUpperCase,
  formatDate,
  sortArray,
} from "utility-soup";

console.log(increment()); // 1
console.log(decrement()); // 0
console.log(toUpperCase("Hello, world!")); // 'HELLO, WORLD!'
console.log(formatDate(new Date())); // e.g., 'April 1, 2024, 10:00 AM'
console.log(sortArray([3, 1, 4, 1, 5, 9])); // [1, 1, 3, 4, 5, 9]
```
