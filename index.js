export function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

export function reverseString(word) {
  return word.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};
