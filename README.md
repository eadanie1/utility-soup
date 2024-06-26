﻿# Utility Soup

Utility Soup is a collection of practical utility functions designed to simplify common tasks in JavaScript and TypeScript development. Whether you're working on a React project, a Node.js application, or any other JavaScript-based project, Utility Soup provides a set of versatile tools to enhance your development experience.

## Functions

### Counter Functions

- `increment(count)`: Increments the counter of passed variable by 1 and returns the updated value.
- `decrement(count)`: Decrements the counter of passed variable by 1 and returns the updated value.

### String Utilities

- `upperCaseify(text)`: Converts the input string `text` to uppercase.

### Date and Time Tools

- `dateToText()`: Formats the current date into a readable string (i.e. Feb 5, 2024, 10:00 PM).

### Array Manipulators

- `sortArray(array)`: Sorts an array of integers in ascending order.

## Installation

You can install Utility Soup via npm:

```bash
npm install utility-soup
```

## Usage

### Basic Example

```javascript
import {
  increment,
  decrement,
  upperCaseify,
  dateToText,
  sortArray,
} from "utility-soup";

console.log(increment(3)); // 4
console.log(decrement(3)); // 2
console.log(upperCaseify("Hello, world!")); // 'HELLO, WORLD!'
console.log(dateToText()); // e.g., 'April 1, 2024, 10:00 AM'
console.log(sortArray([3, 1, 4, 1, 5, 9])); // [1, 1, 3, 4, 5, 9]
```

### React Project Implementation

Here's an example of how to use Utility Soup in a React project:

```javascript
import { useState } from "react";
import "./App.css";
import {
  increment,
  decrement,
  upperCaseify,
  dateToText,
  sortArray,
} from "utility-soup";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [date, setDate] = useState("");
  const [array, setArray] = useState([]);
  const [arraySubmitted, setArraySubmitted] = useState(false);

  const handleIncrement = () => {
    setCount((prevCount) => increment(prevCount));
  };
  const handleDecrement = () => {
    setCount((prevCount) => decrement(prevCount));
  };

  const handleChangeUpperCaseify = (event) => {
    setMessage(upperCaseify(event?.target?.value));
  };
  const handleSubmitMessage = (event) => {
    event.preventDefault();
    handleFormSubmitUpperCaseify(message);
  };
  const handleFormSubmitUpperCaseify = (value) => {
    console.log("Form submitted with: ", value);
    setMessageSubmitted(true);
  };

  const handleDateSubmit = () => {
    setDate(dateToText());
  };

  const handleChangeSortArray = (event) => {
    const arrayFromInputString = event?.target?.value.split(",").map(Number);
    setArray(sortArray(arrayFromInputString));
  };
  const handleSubmitArray = (event) => {
    event.preventDefault();
    handleFormSubmitSortArray(array);
  };
  const handleFormSubmitSortArray = (value) => {
    console.log("Form submitted with: ", value);
    setArraySubmitted(true);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={handleIncrement} style={{ margin: "10px" }}>
          Increment
        </button>
        {count !== 0 && <div>{count}</div>}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={handleDecrement} style={{ margin: "10px" }}>
          Decrement
        </button>
        {count !== 0 && <div>{count}</div>}
      </div>
      <form
        onSubmit={handleSubmitMessage}
        style={{ display: "flex", alignItems: "center" }}
      >
        <button style={{ margin: "10px" }} type="submit">
          upperCaseify!
        </button>
        <input
          type="text"
          placeholder="Type text to upperCaseify"
          onChange={handleChangeUpperCaseify}
        />
        {message && messageSubmitted && <div>{message}</div>}
      </form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={handleDateSubmit} style={{ margin: "10px" }}>
          Show current date
        </button>
        {date && <div>{date}</div>}
      </div>
      <form
        onSubmit={handleSubmitArray}
        style={{ display: "flex", alignItems: "center" }}
      >
        <button style={{ margin: "10px" }} type="submit">
          Sort the array!
        </button>
        <input
          type="text"
          placeholder="Type numbers separated by commas"
          onChange={handleChangeSortArray}
        />
        {array.length > 0 && arraySubmitted && (
          <div style={{ display: "flex", marginLeft: "10px" }}>
            {array.map((number, index) => (
              <p key={index}>{number}, </p>
            ))}
          </div>
        )}
      </form>
    </>
  );
}

export default App;
```

This example showcases how to integrate Utility Soup into a React (Vite) application, demonstrating various functionalities such as incrementing/decrementing a counter, converting text to uppercase, displaying the current date, and sorting an array of numbers.
