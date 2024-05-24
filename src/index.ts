function increment(count: number = 0): number {
  count++;
  return count;
}

function decrement(count: number = 0): number {
  count--;
  return count;
}

function upperCaseify(text: string): string {
  return text.toUpperCase();
}

const dateToText = function(): string {
  const now = new Date();
  const datePart = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const timePart = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
  return `${datePart}, ${timePart}`;
};

const sortArray = (array: number[]): number[] => {
  return array.sort();
};

export { increment, decrement, upperCaseify, dateToText, sortArray };