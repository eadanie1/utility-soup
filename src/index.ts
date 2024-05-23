
function increment(count) {
  count++;
  return count;
}

function decrement(count) {
  count--;
  return count;
}

function upperCaseify(text) {
  return text.toUpperCase();
}

const dateToText = function() {
  const now = new Date();
  const datePart = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const timePart = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
  return `${datePart}, ${timePart}`;
};

const sortArray = (array) => {
  return array.sort();
};